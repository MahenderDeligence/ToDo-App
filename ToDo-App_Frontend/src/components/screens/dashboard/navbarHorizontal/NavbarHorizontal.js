import React from 'react';
import './navbarHorizontal.css';
import DropDown from '../../../dropDown/DropDown';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavbarHorizontal = () => {
    
    return (
        <div className='navHBg'>
            <div className='navIcons'>
                {/* <AccountCircleIcon />
                <KeyboardArrowDownIcon className='downIcon'/> */}
                <DropDown/>
            </div>
        </div>
    )
}

export default NavbarHorizontal