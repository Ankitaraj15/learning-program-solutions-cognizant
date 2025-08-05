import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const converted = (parseFloat(rupees) / 88).toFixed(2); // Assume 1 Euro = 88 INR
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      <h3>{euro ? `€${euro}` : ''}</h3>
    </div>
  );
}

export default CurrencyConvertor;
