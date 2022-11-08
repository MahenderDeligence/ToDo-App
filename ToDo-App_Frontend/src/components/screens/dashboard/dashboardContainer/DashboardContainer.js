import React from 'react';
import './dashboardContainer.css';
// import NavbarHorizontal from '../navbarHorizontal/NavbarHorizontal';
import NavbarVertical from '../navbarVertical/NavbarVertical';
import BoardContainer from '../boardContainer/BoardContainer';

const DashboardContainer = () => {
  

  return (
    <div>
      <NavbarVertical />
      {/* <NavbarHorizontal /> */}
      <BoardContainer />
    </div>
  )
}

export default DashboardContainer