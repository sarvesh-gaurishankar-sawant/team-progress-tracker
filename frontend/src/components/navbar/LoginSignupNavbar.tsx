import React from 'react';

const LoginSignupNavbar: React.FC = () => {
  const handleTranslate = () => {
    console.log('Translate button clicked');
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 text-white py-2 px-4 flex justify-between items-center">
      <div className="text-lg md:text-xl font-bold mt-2">TaskSphere</div>
      <div
        className="mt-2 text-sm md:text-md  text-white font-bold py-2 px-4 rounded"
        onClick={handleTranslate}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      </div>
    </nav>
  );
};

export default LoginSignupNavbar;
