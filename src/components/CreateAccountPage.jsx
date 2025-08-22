import React, { useState } from 'react';
import InputField from './InputField';
import RadioButton from './RadioButton';

const CreateAccountPage = ({ onAccountCreated }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes' // Default to "Yes"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - in real app, you'd validate properly
    if (formData.fullName && formData.phoneNumber && formData.email && formData.password && formData.isAgency) {
      onAccountCreated();
    }
  };

  return (
    <div className="text-left pt-[40px] pb-[20px]">

      <h1 className="font-medium text-[28px] leading-[36px]  w-[188px]  text-[#1D2226] mb-6">
        Create your PopX account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-1">
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <InputField
          label="Phone number"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <InputField
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <InputField
          label="Company name"
          name="companyName"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={handleChange}
        />

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4">
            <RadioButton
              name="isAgency"
              value="yes"
              checked={formData.isAgency === 'yes'}
              onChange={handleChange}
              label="Yes"
            />
            <RadioButton
              name="isAgency"
              value="no"
              checked={formData.isAgency === 'no'}
              onChange={handleChange}
              label="No"
            />
          </div>
        </div>
        <div className='h-[210px]'></div>
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
