import React from 'react';

const AttachedLabelInput = ({
  label = 'Full Name',
  name = 'fullName',
  value,
  onChange,
  placeholder = '',
  required = true,
  className = '',
  ...props
}) => {
  const id = `input-${name}`;

  return (
    <div className="relative inline-block">
      <div className={`relative w-[335px] rounded-lg border border-neutral-300 bg-white ${className}`}>
        <label
          htmlFor={id}
          className="absolute -top-2 left-3 px-1.5 text-[13px] leading-5 font-semibold text-violet-700 bg-white rounded-md"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <input
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full h-10 rounded-lg px-3 pt-2 text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-600"
          {...props}
        />
      </div>
    </div>
  );
};

export default AttachedLabelInput;
