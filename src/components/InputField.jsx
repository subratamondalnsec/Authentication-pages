import React from 'react';

const InputField = ({ 
  label, 
  type = 'text', 
  placeholder, 
  required = false, 
  value, 
  onChange,
  ...props 
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-violet-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[335px] h-[40px] mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
        {...props}
      />
    </div>
  );
};

export default InputField;
