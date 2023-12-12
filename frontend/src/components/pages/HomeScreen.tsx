import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Navbar from "../navbar/Navbar";
import '../../styles/styles.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const HomeScreen = () => {

  let isLoggedIn: boolean = useSelector((state: RootState) => state.login.value);

  if(!isLoggedIn){
    return (
      <Navigate to="/" />
    )
  }

  return (
    <div className="bg-gray-900 h-screen flex relative">
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeScreen;
