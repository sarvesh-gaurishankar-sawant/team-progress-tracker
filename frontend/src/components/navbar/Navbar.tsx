import React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { setSideBarFlag } from "../../store/flags/sideBarFlagSlice"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"


const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  let isSidebarOpen: boolean = useSelector((state: RootState) => state.sideBarFlag.value);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust as needed for your mobile breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
<div className={`fixed top-0 right-0 ${isMobile ? 'w-full' : 'w-4/5'} bg-gray-800 h-24 flex justify-between items-center border border-gray-900`}>
{isMobile && (
        <div className='ml-2'>
          {/* Hamburger Icon for mobile */}
          <MenuIcon
            className="mobile-view-toggle h-6 w-6 cursor-pointer text-white"
            onClick={() => dispatch(setSideBarFlag(!isSidebarOpen))} // Toggle sidebar on click
          />
        </div>
      )}
      <div className='flex items-center flex-grow'>
        <div className='ml-2'>
          {/* Platform Launch Text */}
          <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" className="text-white text-lg font-bold font-['Plus Jakarta Sans']">
            Platform Launch
          </Typography>
        </div>
        <div className='flex-grow' />
        {!isMobile && (
          <div className='mr-5 flex items-center gap-6'>
            {/* Add Button - Desktop View */}
            <button className={`border border-gray-600 flex items-center justify-center h-12 w-[12rem] bg-[#625FC7] text-white rounded-full py-2 px-4 hover:bg-purple-400`}>
              <AddIcon sx={{ marginRight: 1 }} />
              Add new task
            </button>
            {/* Kebab Menu - Desktop View */}
            <button>
              <MoreVertIcon className='h-8' />
            </button>
          </div>
        )}
        {isMobile && (
          <div className='mr-5 flex items-center gap-6'>
            {/* Add Button - Mobile View */}
            <button className={`border border-gray-600 flex items-center justify-center h-8 w-8 bg-[#625FC7] text-white rounded-full py-1 px-2 hover:bg-purple-400`}>
              <AddIcon />
            </button>
            <button>
              <MoreVertIcon className='h-8' />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default NavBar;