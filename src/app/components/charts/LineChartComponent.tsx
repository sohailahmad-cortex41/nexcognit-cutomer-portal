import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartData {
  label: string;
  data: number[];
  color?: string;
  fill?: boolean;
}

interface LineChartComponentProps {
  labels: string[];
  datasets: LineChartData[];
  yAxisLabel?: string;
  showLegend?: boolean;
}

export function LineChartComponent({ 
  labels, 
  datasets, 
  yAxisLabel, 
  showLegend = true 
}: LineChartComponentProps) {
  const chartData = {
    labels,
    datasets: datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.color || '#3b82f6',
      backgroundColor: dataset.fill 
        ? `${dataset.color || '#3b82f6'}20` 
        : 'transparent',
      fill: dataset.fill || false,
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: dataset.color || '#3b82f6',
      pointBorderColor: '#1d283a',
      pointBorderWidth: 2,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
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

  return <Line data={chartData} options={options} />;
}
