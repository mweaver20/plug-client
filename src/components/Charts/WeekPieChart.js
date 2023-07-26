import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function WeekPieChart (props) {
  const powerData = props.powerData;
  const dates = props.dates;
  
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Total watts for day',
        data: powerData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 102, 209, 0.406)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 102, 209, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
  return ( 
    <Pie data={data}/>
   );
}
 
export default WeekPieChart;