import React, { useState } from 'react';
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/Navbar";
import '../../styles/styles.css';
import Board from '../Boards/Board';

const HomeScreen = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-gray-900 h-screen flex relative">
      <Sidebar userId='656b811ba83badbd99125a44' isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Board isSidebarOpen={isSidebarOpen}/>
    </div>
  );
};

export default HomeScreen;
