import React, { useState } from 'react';
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/Navbar";
import '../../styles/styles.css';

const HomeScreen = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-gray-900 h-screen flex relative">
      <Sidebar userId='656b811ba83badbd99125a44' isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Navbar toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default HomeScreen;

{/* <div className="absolute top-2/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 h-40 w-80 items-center justify-center">
<button className='mx-auto border border-gray-600 items-center justify-center h-12 w-[20rem] bg-[#625FC7] text-white rounded-full py-2 px-4 hover:bg-purple-400'>
  Add new Column
</button>
</div> */}