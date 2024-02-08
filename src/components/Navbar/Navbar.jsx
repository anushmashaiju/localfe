import React from 'react'
import "./Navbar.css";
import {  Bookmark, Dehaze, HelpCenter, LocationCity, Logout, Notifications, Person,  Place,  Search, Settings } from '@mui/icons-material';
//import {Link} from "react-router-dom"
function Navbar() {
    return (
        <div className='navbarContainer'>

            <div className="navbarLeft">
                <span className='logo'>Local Connect</span>
            </div>

            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input placeholder='Search for location,post or video' className='searchInput' />
                </div>
            </div>
            <div className="navbarRight">
                <span className='navbarLink'>Homepage</span>
                <span className='navbarLink'>Helpers</span>
                <span className='navbarLink'>Timeline</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                    <Person />
                    <span className='navbarIconBadge'>1</span>
                </div>
                <div className="navbarIconItem">
                    <Notifications />
                    <span className='navbarIconBadge'>1</span>
                </div>
                <div className="navbarIconItem">
                    <LocationCity />
                    <span className='navbarIconBadge'>1</span>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn"><Dehaze />
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="#0"><li className="dropdownListItem">
                        <Place className='dropdownIcon' />
                        <span className='dropdownListItemText'>Change Location</span>
                    </li>
                    </a>
                    <a href="#1"><li className="dropdownListItem">
                        <Bookmark className='dropdownIcon' />
                        <span className='dropdownListItemText'>Bookmark</span>
                    </li>
                    </a>
                    <a href="#2"><li className="dropdownListItem">
                        <HelpCenter className='dropdownIcon' />
                        <span className='dropdownListItemText'>Help Center</span>
                    </li> </a>
                    <a href="#3"> <li className="dropdownListItem">
                        <Settings className='dropdownIcon' />
                        <span className='dropdownListItemText'>Settings</span>
                    </li></a>
                    <a href="#4"><li className="dropdownListItem">
                        <Logout className='dropdownIcon' />
                        <span className='dropdownListItemText'>Logout</span>
                    </li></a>
                </div>
            </div>
            <img src="assets/dp/15_Girls-DP-WWW.FUNYLIFE.IN_-1024x1024.jpg" alt="" className='navbarImg' />
        </div>
    )
}

export default Navbar
