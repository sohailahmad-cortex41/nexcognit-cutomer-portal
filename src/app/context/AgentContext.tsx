import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { agentsApi } from '@/app/services/api';
import { useAuth } from '@/app/context/AuthContext';
import type { Agent } from '@/app/types/api';

interface AgentContextType {
    agents: Agent[];
    selectedAgent: Agent | null;
    setSelectedAgent: (agent: Agent) => void;
    loading: boolean;
    fetchAgents: () => Promise<void>;
    resetAgents: () => void;
}

const AgentContext = createContext<AgentContextType | undefined>(undefined);

export function AgentProvider({ children }: { children: ReactNode }) {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [selectedAgent, setSelectedAgentState] = useState<Agent | null>(null);
    const [loading, setLoading] = useState(false);
    const { isAuthenticated } = useAuth();

    // Fetch agents from API
    const fetchAgents = useCallback(async () => {
        try {
            setLoading(true);
            const agentsList = await agentsApi.getAgents();
            setAgents(agentsList);

            // Store in localStorage
            localStorage.setItem('agents', JSON.stringify(agentsList));

            // Auto-select agent
            const storedAgentId = localStorage.getItem('selectedAgentId');
            if (storedAgentId) {
                const stored = agentsList.find(a => a.id === storedAgentId);
                if (stored) {
                    setSelectedAgentState(stored);
                    return;
                }
            }

            // Default to first agent
            if (agentsList.length > 0) {
                setSelectedAgentState(agentsList[0]);
                localStorage.setItem('selectedAgentId', agentsList[0].id);
            }
        } catch (error) {
            console.error('Failed to fetch agents:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Set selected agent and persist
    const setSelectedAgent = (agent: Agent) => {
        setSelectedAgentState(agent);
        localStorage.setItem('selectedAgentId', agent.id);
    };

    // Reset agents state (called on logout)
    const resetAgents = () => {
        setAgents([]);
        setSelectedAgentState(null);
        setLoading(false);
        localStorage.removeItem('agents');
        localStorage.removeItem('selectedAgentId');
    };

    // Fetch agents when user is authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            // Clear agents when not authenticated
            setAgents([]);
            setSelectedAgentState(null);
            setLoading(false);
            return;
        }

        // User is authenticated, check localStorage first
        const storedAgents = localStorage.getItem('agents');
        const storedAgentId = localStorage.getItem('selectedAgentId');

        if (storedAgents) {
            try {
                const parsed = JSON.parse(storedAgents);
                setAgents(parsed);

                if (storedAgentId) {
                    const stored = parsed.find((a: Agent) => a.id === storedAgentId);
                    if (stored) {
                        setSelectedAgentState(stored);
                    } else if (parsed.length > 0) {
                        setSelectedAgentState(parsed[0]);
                        localStorage.setItem('selectedAgentId', parsed[0].id);
                    }
                } else if (parsed.length > 0) {
                    setSelectedAgentState(parsed[0]);
                    localStorage.setItem('selectedAgentId', parsed[0].id);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error parsing stored agents:', error);
                // If parsing fails, fetch fresh data
                fetchAgents();
            }
        } else {
            // No stored agents, fetch from API
            fetchAgents();
        }
    }, [isAuthenticated, fetchAgents]);

    return (
        <AgentContext.Provider value={{ agents, selectedAgent, setSelectedAgent, loading, fetchAgents, resetAgents }}>
            {children}
        </AgentContext.Provider>
    );
}

export function useAgent() {
    const context = useContext(AgentContext);
    if (context === undefined) {
        throw new Error('useAgent must be used within an AgentProvider');
    }
    return context;
}
