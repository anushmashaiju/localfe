import React, { useState } from 'react'
import "./sidebar.css"
import {  Explore,  FitnessCenter,  LocalCafe,  LocalGroceryStore, LocalHospital, LocalHotel, Restaurant, School, Theaters } from '@mui/icons-material'
import AddTouristPlaceModal from './SidebarModal/TouristPlaceModal.jsx.jsx';
import AddRestaurantModal from './SidebarModal/RestaurantModal.jsx';
import AddRestandStayModal from './SidebarModal/RestandStay.jsx';

function Sidebar() {
  const [isAddTouristPlaceModalOpen, setAddTouristPlaceModalOpen] = useState(false);
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [isRestaurantModalOpen, setIsRestaurantModalOpen] = useState(false);
  const [addedRestaurants, setAddedRestaurants] = useState([]);
  const [isRestandStayModalOpen, setIsRestandStayModalOpen] = useState(false);
  const [addedRestandStay, setAddedRestandStay] = useState([]);
  const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);
  const [addedHospital, setAddedHospital] = useState([]);
  const [isCafeModalOpen, setIsCafeModalOpen] = useState(false);
  const [addedCafe, setAddedCafe] = useState([]);
  const [isMallModalOpen, setIsMallModalOpen] = useState(false);
  const [addedMall, setAddedMall] = useState([]);
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [addedSchool, setAddedSchool] = useState([]);
  const [isTheatreModalOpen, setIsTheatreModalOpen] = useState(false);
  const [addedTheatre, setAddedTheatre] = useState([]);
  const [isFittnessModalOpen, setIsFittnessModalOpen] = useState(false);
  const [addedFittness, setAddedFittness] = useState([]);
 


  const handleAddTouristPlace = (touristPlace) => {
    setTouristPlaces(touristPlace)   // Update the state to include the new tourist place  
  };

  const handleAddRestaurant = (restaurants) => {
    setAddedRestaurants(restaurants);
  };
  const handleAddRestandStay = (RestandStay) => {
    setAddedRestandStay(RestandStay);
  };
  return (
    <div className='sidebar'>
      <div className="sidewrapper">
        <ul className="sidebarList">
         
          <li className="sidebarListItem" onClick={() => setAddTouristPlaceModalOpen(true)}>
            <Explore className='sidebarIcon' />
            <span className='sidebarListItemText'>Tourist Places</span>
          </li>
          <li className="sidebarListItem"onClick={() => setIsRestaurantModalOpen(true)}>
            <Restaurant className='sidebarIcon' />
            <span className='sidebarListItemText'>Restaurent</span>
          </li>           
          <li className="sidebarListItem"onClick={() => setIsRestandStayModalOpen(true)}>
            <LocalHotel className='sidebarIcon' />
            <span className='sidebarListItemText'>Rest and Stay</span>
          </li>
          <li className="sidebarListItem">
            <LocalHospital className='sidebarIcon' />
            <span className='sidebarListItemText'>Hospital</span>
          </li>
          
          <li className="sidebarListItem">
            <LocalCafe className='sidebarIcon' />
            <span className='sidebarListItemText'>Cafe</span>
          </li>
          <li className="sidebarListItem">
            <LocalGroceryStore className='sidebarIcon' />
            <span className='sidebarListItemText'>Shopping Mall</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Schools</span>
          </li>
          <li className="sidebarListItem">
            <Theaters className='sidebarIcon' />
            <span className='sidebarListItemText'>Theaters</span>
          </li>
          <li className="sidebarListItem">
            <FitnessCenter className='sidebarIcon' />
            <span className='sidebarListItemText'>Fitness Centers</span>
          </li>
        </ul>
        

      </div>
      
      

      <AddTouristPlaceModal isOpen={isAddTouristPlaceModalOpen} onClose={() => setAddTouristPlaceModalOpen(false)} onAddTouristPlace={handleAddTouristPlace} />
       <AddRestaurantModal isOpen={isRestaurantModalOpen} onClose={() => setIsRestaurantModalOpen(false)} onAddRestaurant={handleAddRestaurant} />
       <AddRestandStayModal isOpen={isRestandStayModalOpen} onClose={() => setIsRestandStayModalOpen(false)} onAddRestandStay={handleAddRestandStay} />
    </div>
    
  )
}

export default Sidebar
