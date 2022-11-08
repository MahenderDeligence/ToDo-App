import React, { useState } from 'react';
import './navbarVertical.css';
import { Link } from 'react-router-dom';
import { menuData } from './menuData';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarVertical = () => {
  // const navListItems = [
  //   "All Tasks", "In Progress", "Completed", "Today", "Week", "Month"
  // ]

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div >
      {/* <ul className='navbarVertical'>
        {navListItems.map((items) => <li>{items}</li>)}
      </ul> */}



      <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <CloseIcon className='navCloseIcon' />
              </Link>
            </li>
            {menuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span className='listItemTxt'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>


    </div>
  )
}

export default NavbarVertical