import React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/styles.css';
import { setSideBarFlag } from "../../store/flags/sideBarFlagSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"
import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material';
import { cols } from '../../components/LoadJson/LoadJson';
import { translate } from '../Translations/translate';



const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [languageModalOpen, setLanguageModalOpen] = useState<boolean>(false);


  const handleLanguageSelect = async (languageCode: string) => {
    setLanguageModalOpen(false);
    await translate(languageCode);
  };

  const dispatch = useDispatch<AppDispatch>();

  const openLanguageModal = () => {
    setLanguageModalOpen(true);
  };

  const closeLanguageModal = () => {
    setLanguageModalOpen(false);
  };

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
            <button onClick={openLanguageModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </button>
            <button>
              <MoreVertIcon className='h-8' />
            </button>

            {/* Language Selection Modal */}


            <Dialog open={languageModalOpen} onClose={closeLanguageModal}>
              <DialogTitle style={{ textAlign: 'center' }}>Select Language</DialogTitle>
              <DialogContent style={{ backgroundColor: '#303030' }}>
                <div style={{ display: 'flex', gap: '20px', color: 'white' }}>
                  {cols.map((column, index) => (
                    <List key={index} style={{ flex: 1 }}>
                      {column.map((language: { native_name: string; language_code: React.Key | null | undefined; display_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                        <button onClick={() => {
                          if (typeof language.language_code === 'string') {
                            handleLanguageSelect(language.language_code);
                          }
                        }}>
                          <ListItem button key={language.language_code}>
                            <ListItemText primary={language.display_name + '(' + language.native_name + ')'} />
                          </ListItem>
                        </button>
                      ))}
                    </List>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

          </div>
        )}
        {isMobile && (
          <div className='mr-5 flex items-center gap-6'>
            {/* Add Button - Mobile View */}
            <button className={`border border-gray-600 flex items-center justify-center h-8 w-8 bg-[#625FC7] text-white rounded-full py-1 px-2 hover:bg-purple-400`}>
              <AddIcon />
            </button>
            <button onClick={openLanguageModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>

            </button>
            <button>
              <MoreVertIcon className='h-8' />
            </button>

            {/* Language Selection Modal */}
            <Dialog open={languageModalOpen} onClose={closeLanguageModal}>
              <DialogTitle style={{ textAlign: 'center' }}>Select Language</DialogTitle>
              <DialogContent style={{ backgroundColor: '#303030' }}>
                <div style={{ display: 'flex', gap: '20px', color: 'white' }}>
                  {cols.map((column, index) => (
                    <List key={index} style={{ flex: 1 }}>
                      {column.map((language: { native_name: string; language_code: React.Key | null | undefined; display_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                        <button onClick={() => {
                          if (typeof language.language_code === 'string') {
                            handleLanguageSelect(language.language_code);
                          }
                        }}>
                          <ListItem button key={language.language_code}>
                            <ListItemText primary={language.display_name + '(' + language.native_name + ')'} />
                          </ListItem>
                        </button>
                      ))}
                    </List>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

      </div>
    </div>
  );
};

export default NavBar;