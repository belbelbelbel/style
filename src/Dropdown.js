import React, { useState } from 'react'

export const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  return (
    <div>
    <select value={selectedOption} onChange={handleChange}>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <p>Selected option: {selectedOption}</p>
  </div>

  )
}
