import React, { useState } from 'react';
import './navbarVertical.css';

const NavbarVertical = () => {
  const navListItems = [
    "All Tasks", "In Progress", "Completed", "Today", "Week", "Month"
  ]
  
  return (
    <div className='navVBg'>

      <ul className='navbarVertical'>
        {navListItems.map((items) => <li>{items}</li>)}


        {/* <li>All Tasks</li>
            <li>In Progress</li>
            <li>Completed</li>
            <li>Today</li>
            <li>Tomorrow</li>
            <li>Month</li> */}
      </ul>
    </div>
  )
}

export default NavbarVertical