import React, { useState, useRef,useEffect } from 'react';
import './dropDown.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const DropDown = () => {
    
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const checkIfClickedOutside = e => {   
          if (isActive && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsActive(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isActive])

    return (
        <div className="container">
            <div className="menu-container">
                <button onClick={() => setIsActive(true)} className="menu-trigger">
                    <span>User</span>
                    <AccountCircleIcon className='account' />

                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul >
                        <li>
                            <a href="/myprofile">My Profile</a>
                        </li>
                        <li>
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default DropDown