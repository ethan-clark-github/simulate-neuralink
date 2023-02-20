import React, { useState, useEffect } from 'react';

function OutputsDropdown() {
  const [selectedOption, setSelectedOption] = useState([]);
  const [outputs, setOutputs] = useState([])

  useEffect(() => {
    fetch('/outputs')
        .then(res => res.json())
        .then((data) => setOutputs(data));
  }, [])

  const mapOutputs = outputs.map((output) => {
    return(
        {value: output.id, label: output.name}
    )

})
// console.log(selectedOption)
//   const options = [mapInputs];

  return (
    <div>
      <label><strong>Select an output:</strong></label>
      <select 
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
        >
        {mapOutputs.map(option => (
            <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OutputsDropdown;