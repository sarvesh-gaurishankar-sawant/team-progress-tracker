import React from "react";
import {ReactComponent as AddLogo} from '../../assets/svg/addlogo.svg';
import KebabMenu from '../icons/kebab-menu';


const NavbarRightSide: React.FC = () => {
    return (
        <div className="flex mr-0">
        <AddLogo />
        <KebabMenu/>
        </div>
    );
    }

export default NavbarRightSide;