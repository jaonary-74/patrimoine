import React from 'react';

const OutputDisplay = ({ fluxData }) => {
  return (
    <div className="output-display">
      <h5>Données des Flux</h5>
      <pre>
        {fluxData.map(entry => `[${entry.date}] : ${entry.amount}`).join('\n')}
      </pre>
    </div>
  );
};

export default OutputDisplay;