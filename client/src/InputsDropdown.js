import React, { useState, useEffect } from 'react';

function InputsDropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputs, setInputs] = useState([])

  useEffect(() => {
    fetch('/inputs')
        .then(res => res.json())
        .then((data) => setInputs(data));
  }, [])

//   const mapInputs = inputs.map((input) => {
//     return input.name
// })

//   const options = [mapInputs];

  return (
    <div>
      <label><strong>Select an input:</strong></label>
      <select 
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        {inputs.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputsDropdown;