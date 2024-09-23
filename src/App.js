import React, { useState } from 'react';
import UserInput from './components/UserInput';
import OutputDisplay from './components/OutputDisplay';
import FinancialChecklist from './components/FinancialChecklist';
import './App.css'; 

// Données fictives
const fluxDonnées = {
  riche: {
    journaliers: [
      { date: '2024-07-01', amount: 500000 },
      { date: '2024-07-02', amount: 520000 },
      { date: '2024-07-03', amount: 480000 },
    ],
    finances: {
      "Agrégat": [600000, 580000, 620000],
      "Trésorerie": [600000, 580000, 620000],
      "Immobilisations": [300000, 310000, 320000],
      "Obligations": [150000, 155000, 160000],
    },
  },
  pire: {
    journaliers: [
      { date: '2024-07-01', amount: 200000 },
      { date: '2024-07-02', amount: 180000 },
      { date: '2024-07-03', amount: 190000 },
    ],
    finances: {
      "Agrégat": [250000, 240000, 230000],
      "Trésorerie": [250000, 240000, 230000],
      "Immobilisations": [100000, 95000, 90000],
      "Obligations": [50000, 45000, 40000],
    },
  },
  cresus: {
    journaliers: [
      { date: '2024-07-01', amount: 800000 },
      { date: '2024-07-02', amount: 780000 },
      { date: '2024-07-03', amount: 790000 },
    ],
    finances: {
      "Agrégat": [700000, 720000, 710000],
      "Trésorerie": [700000, 720000, 710000],
      "Immobilisations": [400000, 410000, 420000],
      "Obligations": [200000, 205000, 210000],
    },
  },
};

const App = () => {
  const [selectedPatrimoine, setSelectedPatrimoine] = useState('riche');
  const [startDate, setStartDate] = useState('2024-07-01');
  const [endDate, setEndDate] = useState('2024-07-03');
  const [selectedItems, setSelectedItems] = useState(["Trésorerie"]);
  const [fluxData, setFluxData] = useState(fluxDonnées[selectedPatrimoine].journaliers);
  const [financesData, setFinancesData] = useState(fluxDonnées[selectedPatrimoine].finances);

  const handlePatrimoineChange = (value) => {
    setSelectedPatrimoine(value);
    setFluxData(fluxDonnées[value].journaliers);
    setFinancesData(fluxDonnées[value].finances);
  };

  const handleChecklistChange = (items) => {
    setSelectedItems(items);
  };

  return (
    <div className="container">
      <h3>
        Patrimoine : {selectedPatrimoine} | Date : {startDate} à {endDate}
      </h3>
      <div className="row">
        <div className="column">
          <UserInput 
            onInputChange={handlePatrimoineChange} 
            startDate={startDate} 
            setStartDate={setStartDate} 
            endDate={endDate} 
            setEndDate={setEndDate} 
            selectedPatrimoine={selectedPatrimoine} 
          />
          <FinancialChecklist 
            selectedItems={selectedItems} 
            onSelectionChange={handleChecklistChange} 
          />
          <OutputDisplay fluxData={fluxData} />
        </div>
      </div>
    </div>
  );
};

export default App;