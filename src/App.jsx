
import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import SignInPage from "./components/SignInPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AccountSettingsPage from "./components/AccountSettingsPage";

function App() {
  const [page, setPage] = useState(1);
  const totalPages = 4; // Reduced to 4 pages (removed success page)

  const goPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(4); // If at page 1, go to page 4
    }
  };

  const goNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    } else {
      setPage(1); // If at page 4, go to page 1
    }
  };

  const goHome = () => {
    setPage(1); 
  };

  const handleCreateAccount = () => {
    setPage(3); 
  };

  const handleSignIn = () => {
    setPage(2); 
  };

  const handleAccountCreated = () => {
    setPage(4); // Go to account settings after account creation
  };

  const handleLoginSuccess = () => {
    setPage(4); // Go to account settings after successful login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">

      <div className="w-[375px] h-[812px] bg-[#F7F8F9] shadow-md rounded-lg px-[20px] flex flex-col justify-start">
        {page === 1 && (
          <WelcomePage 
            onCreateAccount={handleCreateAccount} 
            onSignIn={handleSignIn} 
          />
        )}

        {page === 2 && (
          <SignInPage onLoginSuccess={handleLoginSuccess} />
        )}

        {page === 3 && (
          <CreateAccountPage onAccountCreated={handleAccountCreated} />
        )}

        {page === 4 && (
          <AccountSettingsPage />
        )}
      </div>
      

     
      <div className="flex items-center justify-center gap-6 pt-4  w-[370px]">
      
        <button onClick={goHome} className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75A.75.75 0 013 21V9.75z" />
          </svg>
        </button>

   
        <button
          onClick={goPrev}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

      
        <span className="text-sm text-gray-600">
          {page} of {totalPages}
        </span>

  
        <button
          onClick={goNext}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
