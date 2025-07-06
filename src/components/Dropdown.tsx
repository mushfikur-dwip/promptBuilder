import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownOption } from '../types';

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  customValue?: string;
  onCustomChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  customValue = '',
  onCustomChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(value === 'custom');

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setShowCustomInput(optionValue === 'custom');
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-600 transition-colors duration-200 flex items-center justify-between"
        >
          <span className={selectedOption ? 'text-white' : 'text-gray-400'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {showCustomInput && (
        <input
          type="text"
          value={customValue}
          onChange={(e) => onCustomChange?.(e.target.value)}
          placeholder="Enter custom value..."
          className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default Dropdown;