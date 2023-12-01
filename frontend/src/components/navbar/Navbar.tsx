import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../icons/Logo';
import NavbarRightSide from './NavbarRightSide';
import {ReactComponent as DropdownIcon} from '../../assets/svg/drop-down-icon.svg';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <AppBar position="static">
    //   <Container maxWidth="xl" className="bg-gray-800 h-16 md:h-20 lg:h-24">
    //     <Toolbar disableGutters className='py-3 '>
    //         <Logo />
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="#app-bar-with-responsive-menu"
    //         className="text-white text-lg font-bold font-['Plus Jakarta Sans']"
    //       >
    //         Platform Launch
    //       </Typography>

    //       <DropdownIcon className="w-2 h-2 mx-1" />
          
    //       <NavbarRightSide />
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <div className="w-[375px] h-16 relative">
    <div className="w-[375px] h-16 left-0 top-0 absolute bg-gray-800"></div>
    <div className="w-[159px] h-[23px] left-[56px] top-[21px] absolute justify-center items-center gap-2 inline-flex">
        <div className="text-white text-lg font-bold font-['Plus Jakarta Sans']">Platform Launch</div>
    </div>
    <div className="w-6 h-[25px] left-[16px] top-[20px] absolute">
        <div className="w-1.5 h-[25px] left-0 top-0 absolute bg-indigo-500 rounded-sm"></div>
        <div className="w-1.5 h-[25px] left-[9px] top-0 absolute opacity-75 bg-indigo-500 rounded-sm"></div>
        <div className="w-1.5 h-[25px] left-[18px] top-0 absolute opacity-50 bg-indigo-500 rounded-sm"></div>
    </div>
    <div className="opacity-25 w-12 h-8 left-[291px] top-[16px] absolute">
        <div className="w-12 h-8 left-0 top-0 absolute bg-indigo-500 rounded-3xl"></div>
    </div>
    <div className="w-[3.69px] h-4 left-[355px] top-[24px] absolute">
        <div className="w-[3.69px] h-[3.69px] left-0 top-0 absolute bg-slate-400 rounded-full"></div>
        <div className="w-[3.69px] h-[3.69px] left-0 top-[6.15px] absolute bg-slate-400 rounded-full"></div>
        <div className="w-[3.69px] h-[3.69px] left-0 top-[12.31px] absolute bg-slate-400 rounded-full"></div>
    </div>
</div>
  );
}
export default ResponsiveAppBar;