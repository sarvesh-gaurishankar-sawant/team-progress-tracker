import React from 'react';

const LoginSignupNavbar: React.FC = () => {
  const handleTranslate = () => {
    console.log('Translate button clicked');
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 text-white py-2 px-4 flex justify-between items-center">
      <div className="text-lg md:text-xl font-bold mt-2">TaskSphere</div>
      <button
        className="mt-2 text-sm md:text-md  text-white font-bold py-2 px-4 rounded"
        onClick={handleTranslate}
      >
        Translate
      </button>
    </nav>
  );
};

export default LoginSignupNavbar;
