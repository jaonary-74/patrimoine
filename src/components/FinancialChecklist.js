import React from 'react';

const FinancialChecklist = ({ selectedItems, onSelectionChange }) => {
  const items = ["Agrégat", "Trésorerie", "Immobilisations", "Obligations"];

  const handleChange = (item) => {
    if (selectedItems.includes(item)) {
      onSelectionChange(selectedItems.filter(i => i !== item));
    } else {
      onSelectionChange([...selectedItems, item]);
    }
  };

  return (
    <div className="financial-checklist">
      <h5>Éléments Financiers</h5>
      <div className="checkbox-container">
        {items.map(item => (
          <div key={item} className="checkbox-item">
            <input 
              type="checkbox" 
              checked={selectedItems.includes(item)} 
              onChange={() => handleChange(item)} 
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialChecklist;