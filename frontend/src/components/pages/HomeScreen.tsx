import React, { useState } from 'react';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import '../../styles/styles.css';
import { Outlet } from 'react-router-dom';

const HomeScreen = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="bg-gray-900 h-screen flex relative">
      <Sidebar userId='656b811ba83badbd99125a44' isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Navbar  />
      <Outlet />
    </div>
  );
};

export default HomeScreen;
