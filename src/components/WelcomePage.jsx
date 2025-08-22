import React from 'react';

const WelcomePage = ({ onCreateAccount, onSignIn }) => {
  return (
    <div className="relative flex flex-col justify-between">
        <div className='h-[549px]'></div>
      <div className="flex flex-col items-start text-center h-[263px]">
        <h1 className="text-[28px]  font-bold text-gray-900 ">
          Welcome to PopX
        </h1>
        <p className=" w-[232px] text-gray-500 text-lg mb-6 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>

        <div className="space-y-3">
          <button 
            onClick={onCreateAccount} 
            className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold transition cursor-pointer"
          >
            Create Account
          </button>
          <button 
            onClick={onSignIn} 
            className="w-full py-3 rounded-md bg-purple-200 text-purple-800 font-semibold hover:bg-purple-300 transition cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
