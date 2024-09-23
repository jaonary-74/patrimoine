import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

const ChartComponent = ({ fluxData, selectedItems, financesData }) => {
  const data = {
    labels: fluxData.map(entry => entry.date),
    datasets: selectedItems.map((item, index) => ({
      label: item,
      data: financesData[item] || [], 
      fill: false,
      backgroundColor: `rgba(${index * 50}, 99, 132, 0.2)`,
      borderColor: `rgba(${index * 50}, 99, 132, 1)`,
    })),
  };

  return (
    <div>
      <h5>Graphique des Flux</h5>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;