// Navbar.jsx
import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { Bookmark, Edit, HelpCenter, Notifications, Search, Settings } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
import EditProfileModal from './EditProfileModal';
import { Link } from 'react-router-dom';
import { Logout } from '../../context/AuthActions';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar({ setSelectedLocation }) {
    const { user, dispatch } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [districtsDropdown, setDistrictsDropdown] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleLogout = () => {
    
        // Dispatch the logout action
        dispatch(Logout());
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
                    <input placeholder='Search for location, post or video' className='searchInput' />
                </div>
            </div>

            <div className="navbarRight">
            <Link to="/" className='navbarLink'>Homepage</Link>
                <Link to="/AddPost" className='navbarLink'>Add Post</Link>
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

            <div className="navbarIcons">
                <div className="navbarIconItem">
                    <Notifications />
                    <span className='navbarIconBadge'>1</span>
                </div>
            </div>

            <div className="dropdown">
                <img
                    src={user.profilePicture ? PF + user.profilePicture : PF + "dp/default-avatar-profile-icon-social-600nw-1677509740.webp"}
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
                    <a href="#6"onClick={handleLogout}><li className="dropdownListItem">
                        <LogoutIcon  className='dropdownIcon' />
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

