import React from 'react';

const RadioButton = ({ name, value, checked, onChange, label, ...props }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input 
          type="radio" 
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
          {...props}
        />
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          checked 
            ? 'border-[#6C25FF] bg-white' 
            : 'border-gray-300 bg-white hover:border-gray-400'
        }`}>
          {checked && (
            <div className="w-3 h-3 rounded-full bg-[#6C25FF]"></div>
          )}
        </div>
      </div>
      <span className="text-gray-700 text-sm">{label}</span>
    </label>
  );
};

export default RadioButton;
