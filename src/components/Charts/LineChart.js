import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';



function LineChart(props) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = Array.from({ length: 60 }, (_, i) => i + 1);
  const chartData = props.powerData;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Watts per minute',
      },
    }
  };
  

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Watts',
        data: chartData,
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
      }
    ],
  };

  return (
    <Line
     options={options} data={data} 
    />
  );
}


export default LineChart;

