import React from 'react';

const LoginSignupFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 justify-between items-center">
        <div className="text-sm md:text-md mb-2">
          &copy; {new Date().getFullYear()} TaskSphere. All rights reserved.
        </div>
        <div>Made with love ❤️ by</div>
        <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-white text-sm md:text-md font-bold py-2 px-4 rounded hover:text-purple-300">
                Yesha Joshi
            </a>
            <a href="#" className="text-white text-sm md:text-md font-bold py-2 px-4 rounded hover:text-purple-300 ml-4">
                Shashwat Shahi
            </a>
            <a href="#" className="text-white text-sm md:text-md font-bold py-2 px-4 rounded hover:text-purple-300 ml-4">
                Tejashree Gore
            </a>
            <a href="#" className="text-white text-sm md:text-md font-bold py-2 px-4 rounded hover:text-purple-300 ml-4">
                Sarvesh Sawant
            </a>
        </div>
      </div>
    </footer>
  );
};

export default LoginSignupFooter;
