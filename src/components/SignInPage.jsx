import React, { useState } from 'react';
import InputField from './InputField';

const SignInPage = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - in real app, you'd validate against backend
    if (formData.email && formData.password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="text-left pt-[40px]">
      <h1 className="text-[26px] w-[188px] font-bold text-gray-900 mb-2">
        Signin to your PopX account
      </h1>
      <p className="text-gray-400 text-[18px] mb-6 w-[232px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-[335px] h-[46px] py-3 rounded-md bg-[#CBCBCB] hover:bg-violet-700 text-white cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
