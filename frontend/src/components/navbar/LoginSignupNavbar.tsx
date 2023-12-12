import React from 'react';

const LoginSignupNavbar: React.FC = () => {
  const handleTranslate = () => {
    // Logic for translation or language switching
    console.log('Translate button clicked');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg md:text-xl font-bold">TaskSphere</div>
      <button
        className="text-sm md:text-md bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleTranslate}
      >
        Translate
      </button>
    </nav>
  );
};

export default LoginSignupNavbar;
