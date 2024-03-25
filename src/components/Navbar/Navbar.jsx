// Navbar.js

import React, { useContext, useEffect, useState } from 'react';
import "./Navbar.css";
import { Bookmark, Edit, HelpCenter, Notifications, Search, Settings } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
import EditProfileModal from './EditProfileModal';
import { Link } from 'react-router-dom';
import { Logout } from '../../context/AuthActions';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';


function Navbar({ setSelectedLocation }) {
    const { user, dispatch } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [districtsDropdown, setDistrictsDropdown] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [todaysEvents, setTodaysEvents] = useState([]);
    const [tomorrowsEvents, setTomorrowsEvents] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false); // State to control visibility of notifications
    const [showNavbarRight, setShowNavbarRight] = useState(false); // State to control visibility of right part of the navbar
    
    const fetchTodaysAndTomorrowsEvents = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/events/todaysAndTomorrowsEvents`);
            if (res.status === 200) {
                const { todaysEvents, tomorrowsEvents } = res.data;
                setTodaysEvents(todaysEvents);
                setTomorrowsEvents(tomorrowsEvents);
            } else {
                console.error('Failed to fetch today\'s and tomorrow\'s events. Unexpected response:', res);
            }
        } catch (error) {
            console.error('Error fetching today\'s and tomorrow\'s events:', error);
        }
    };

    useEffect(() => {
        fetchTodaysAndTomorrowsEvents();
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleLogout = () => {

        // Dispatch the logout action
        dispatch(Logout());
    };

    const handleNotificationClick = () => {
        // Toggle visibility of notifications
        setShowNotifications(!showNotifications);
    };
    const renderNotification = (event) => {
        return (
            <li key={event._id} className="notificationItem">
                {event.eventname} - {new Date(event.date).toLocaleDateString()} - {event.location}
            </li>
        );
    };


    const handleLocationButtonClick = () => {
        setDistrictsDropdown(!districtsDropdown);
    };

    const handleDistrictSelect = (district) => {
        setSelectedDistrict(district);
        setSelectedLocation(district);
        setDistrictsDropdown(false);
    };

    const allDistricts = ["Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasargod"];


    return (
        <div className='navbarContainer'>
            <div className="navbarLeft">
                <span className='logo'>Local Connect</span>
            </div>

            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input placeholder='Search for location or post ' className='searchInput' />
                </div>
            </div>

            <div className={`navbarRight ${showNavbarRight ? 'active' : ''}`}>
            <div className="navbarLinksContainer">
                <Link to="/" className='navbarLink'>Home</Link>
                <Link to="/AddPost" className='navbarLink'>Profile</Link>
                <span className='navbarLocation' onClick={handleLocationButtonClick}>
                    {selectedDistrict ? selectedDistrict : "Location"}
                </span>
                {districtsDropdown && (
                    <div className="districtDropdown">
                        {allDistricts.map((district, index) => (
                            <div key={index} className="districtDropdownItem" onClick={() => handleDistrictSelect(district)}>
                                {district}
                            </div>
                        ))}
                    </div>
                )}
</div>
            </div>

            <div className="toggleNavbarRight" onClick={() => setShowNavbarRight(!showNavbarRight)}>
                <span className="toggleLine"></span>
                <span className="toggleLine"></span>
                <span className="toggleLine"></span>
            </div>

            <div className="navbarIcons">
                <div className="dropdown">
                    <div className="navbarIconItem" onClick={handleNotificationClick}>
                        <Notifications />
                        <span className='navbarIconBadge'>{todaysEvents.length + tomorrowsEvents.length}</span>
                    </div>

                    {/* Display notification list as dropdown */}
                    {showNotifications && (
                        <div className="dropdown-content">
                            <ul className="notificationsList">
                                {todaysEvents.map(event => renderNotification(event))}
                                {tomorrowsEvents.map(event => renderNotification(event))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="dropdown">
                <img
                    src={user?.profilePicture ? PF + user.profilePicture : PF + "dp/default-avatar-profile-icon-social-600nw-1677509740.webp"}
                    alt=""
                    className='navbarImg'
                />

                <div className="dropdown-content">
                    <a href="#1" onClick={toggleModal}>
                        <li className="dropdownListItem">
                            <Edit className='dropdownIcon' />
                            <span className='dropdownListItemText'>Edit</span>
                        </li>
                    </a>

                    <a href="#3"><li className="dropdownListItem">
                        <Bookmark className='dropdownIcon' />
                        <span className='dropdownListItemText'>Bookmark</span>
                    </li></a>
                    <a href="#4"><li className="dropdownListItem">
                        <HelpCenter className='dropdownIcon' />
                        <span className='dropdownListItemText'>Help Center</span>
                    </li></a>
                    <a href="#5"><li className="dropdownListItem">
                        <Settings className='dropdownIcon' />
                        <span className='dropdownListItemText'>Settings</span>
                    </li></a>
                    <a href="#6" onClick={handleLogout}><li className="dropdownListItem">
                        <LogoutIcon className='dropdownIcon' />
                        <span className='dropdownListItemText'>LogOut</span>
                    </li></a>
                </div>
            </div>

            <EditProfileModal isOpen={isModalOpen} onRequestClose={toggleModal} />
            <span className='user' title={user.userName}>{user.userName}</span>
        </div>
    );
}

export default Navbar;

