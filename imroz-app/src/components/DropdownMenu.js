import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        Home
        <i className={`fas fa-angle-${isOpen ? 'up' : 'down'}`} />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
