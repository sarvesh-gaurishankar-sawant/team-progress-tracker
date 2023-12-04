import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../icons/Logo';
import { ReactComponent as DropdownIcon } from '../../assets/svg/drop-down-icon.svg';
import { ReactComponent as AddLogo } from '../../assets/svg/addlogo.svg';
import { ReactComponent as KebabMenu } from '../../assets/svg/kebab-menu-icon.svg';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
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
    <div className="fixed top-0 right-0 w-4/5 bg-gray-800 h-24 flex border border-gray-900">
      <div className='flex items-center ml-2'>
        <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" className="text-white text-lg font-bold font-['Plus Jakarta Sans'] ">
          Platform Launch
        </Typography>
      </div>
      <div className='ml-auto mr-5 flex items-center gap-6'>
      <button className="border border-gray-600 flex items-center justify-center h-12 w-[12rem] bg-[#625FC7] text-white rounded-full py-2 px-4 hover:bg-purple-400">
        <AddLogo className='mr-3'/>
        Add new task
      </button>
        <button className=''>
        <KebabMenu className='h-8' />
        </button>
      </div>
    </div>
  );
}
export default Navbar;

{/* <AppBar position="relative" className='w-[9/12]'>
  <Container className="flex justify-end items-center bg-gray-800 h-24">
    <Toolbar disableGutters className='flex items-center'>
      <div className='flex items-center gap-2'>
        <Logo />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          className="text-white text-lg font-bold font-['Plus Jakarta Sans']"
        >
          Platform Launch
        </Typography>
        <DropdownIcon className="w-2 h-2 mx-1" />
      </div>
      <div className='ml-auto flex items-center gap-4'>
        <AddLogo />
        <KebabMenu className='h-4 mt-2' />
      </div>
    </Toolbar>
  </Container>
</AppBar> */}