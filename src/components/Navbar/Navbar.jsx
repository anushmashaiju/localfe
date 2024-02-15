import React, { useContext } from 'react'
import "./Navbar.css";
import { Bookmark, Dehaze, Edit, HelpCenter, LocationCity, Logout, Notifications, Person, Place, Search, Settings } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
//import {Link} from "react-router-dom"
function Navbar() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
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

            </div>



            <div className="dropdown">
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "dp/default-avatar-profile-icon-social-600nw-1677509740.webp"} alt="" className='navbarImg' />
                {/*(user.profilePicture?PF+ user.profilePicture )if there is profile pic use it (:PF+"dp/default-avatar-profile-icon-social-600nw-1677509740.webp) (':' this indicate 'or') or use avathar ie common*/}
                <div className="dropdown-content">
                    <a href="#0"><li className="dropdownListItem">
                        <Edit className='dropdownIcon' />
                        <span className='dropdownListItemText'>Edit</span>
                    </li>
                    </a>
                   
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
                            <a href="#1"><li className="dropdownListItem">
                        <Logout className='dropdownIcon' />
                        <span className='dropdownListItemText'>LogOut</span>
                    </li>
                    </a>
                        </li></a>

                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Navbar
