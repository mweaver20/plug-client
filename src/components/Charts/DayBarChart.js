import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


function DayBarChart(props) {

  let chartData = props.powerData;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily usage by hour',
      },
    },
  };

  const labels = Array.from({ length: 24 }, (_, i) => i + 1);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total watts per hour',
        data: chartData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  

  return (
    <Bar options={options} data={data} />
   );
}

export default DayBarChart;