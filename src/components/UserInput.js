import React, { useState } from 'react';

const UserInput = ({ onInputChange, startDate, setStartDate, endDate, setEndDate, selectedPatrimoine }) => {
  const patrimoines = ['riche', 'pire', 'cresus'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePatrimoineChange = (value) => {
    onInputChange(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="user-input">
      <label>Patrimoine</label>
      <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <div className="dropdown-toggle">
          {selectedPatrimoine} ▼
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {patrimoines.map((patrimoine) => (
              <div 
                key={patrimoine} 
                className="dropdown-item" 
                onClick={() => handlePatrimoineChange(patrimoine)}
              >
                {patrimoine}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="date-inputs">
        <label>De</label>
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
        />
        <label>À</label>
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default UserInput;