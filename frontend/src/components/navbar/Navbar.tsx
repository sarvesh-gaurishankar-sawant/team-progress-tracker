import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../icons/Logo';
import { ReactComponent as DropdownIcon } from '../../assets/svg/drop-down-icon.svg';
import {ReactComponent as AddLogo} from '../../assets/svg/addlogo.svg';
import {ReactComponent as KebabMenu} from '../../assets/svg/kebab-menu-icon.svg';


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
    <AppBar position="relative">
      <Container maxWidth="xl" className="left-0 top-0 absolute bg-gray-800 h-16 md:h-20 lg:h-24 ">
        <Toolbar disableGutters className='items-center mt-2.5'>
          <div className='absolute justify-center items-center gap-2 inline-flex'>
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
          <div className='absolute right-[0px] inline-flex gap-4'>
          <AddLogo />
          <KebabMenu className='h-4 mt-2'/>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;