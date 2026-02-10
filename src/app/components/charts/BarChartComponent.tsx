import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartData {
  label: string;
  data: number[];
  color?: string;
}

interface BarChartComponentProps {
  labels: string[];
  datasets: BarChartData[];
  yAxisLabel?: string;
  showLegend?: boolean;
  horizontal?: boolean;
}

export function BarChartComponent({ 
  labels, 
  datasets, 
  yAxisLabel, 
  showLegend = true,
  horizontal = false
}: BarChartComponentProps) {
  const chartData = {
    labels,
    datasets: datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.color || '#3b82f6',
      borderColor: dataset.color || '#3b82f6',
      borderWidth: 0,
      borderRadius: 6,
    })),
  };

  const options = {
    indexAxis: horizontal ? ('y' as const) : ('x' as const),
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top' as const,
        labels: {
          color: '#94a3b8',
          padding: 15,
          font: {
            size: 12,
          },
          usePointStyle: true,
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
      },
    },
    scales: {
      x: {
        grid: {
          color: '#334155',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#334155',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 11,
          },
        },
        title: yAxisLabel ? {
          display: true,
          text: yAxisLabel,
          color: '#94a3b8',
          font: {
            size: 12,
          },
        } : undefined,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
