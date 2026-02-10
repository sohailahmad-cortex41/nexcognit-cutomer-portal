import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartData {
  name: string;
  value: number;
  color?: string;
}

interface PieChartComponentProps {
  data: PieChartData[];
  showLegend?: boolean;
  showLabels?: boolean;
  percentages?: Record<string, number>; // Pre-calculated percentages from API
}

export function PieChartComponent({ data, showLegend = true, showLabels = true, percentages }: PieChartComponentProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0) || 1; // Prevent division by zero

  const chartData = {
    labels: data.map(item => {
      let percentage: string;
      if (percentages && percentages[item.name] !== undefined) {
        // Use API-provided percentage
        percentage = percentages[item.name].toFixed(1);
      } else {
        // Calculate from values
        percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0.0';
      }
      return `${item.name} (${item.value}, ${percentage}%)`;
    }),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color || '#3b82f6'),
        borderColor: '#1d283a',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'bottom' as const,
        labels: {
          color: '#94a3b8',
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: '#1d283a',
        titleColor: '#f8fafc',
        bodyColor: '#f8fafc',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function () {
            return ''; // Return empty since we included data in labels
          }
        }
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}
