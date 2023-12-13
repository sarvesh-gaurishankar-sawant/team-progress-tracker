import React from 'react';

const LoginSignupFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-5">
      <div className="flex flex-col justify-between items-center">
        <div className="text-sm md:text-md mb-2">
          &copy; {new Date().getFullYear()} TaskSphere. All rights reserved.
        </div>
        <div className='pb-2'>Made with love ❤️ by</div>
        <div className="pb-2">
            <a href="#" className="font-bold rounded hover:text-purple-300">
                Yesha
            </a>
            <a href="#" className="font-bold rounded hover:text-purple-300 ml-4">
                Shashwat
            </a>
            <a href="#" className="font-bold rounded hover:text-purple-300 ml-4">
                Tejashree
            </a>
            <a href="#" className="font-bold rounded hover:text-purple-300 ml-4">
                Sarvesh
            </a>
        </div>
      </div>
    </footer>
  );
};

export default LoginSignupFooter;
