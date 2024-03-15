import React, { useState } from 'react'
import "./sidebar.css"
import { Explore, FitnessCenter, LocalCafe, LocalGroceryStore, LocalHospital, LocalHotel, Restaurant, School, Theaters } from '@mui/icons-material'
import AddTouristPlaceModal from './SidebarModal/TouristPlaceModal.jsx.jsx';
import AddRestaurantModal from './SidebarModal/RestaurantModal.jsx';
import AddRestandStayModal from './SidebarModal/RestandStay.jsx';
import AddCafeModal from './SidebarModal/Cafe.jsx';
import AddHospitalModal from './SidebarModal/Hospital.jsx';
import AddMallModal from './SidebarModal/Mall.jsx';
import AddSchoolModal from './SidebarModal/School.jsx';
import AddFittnessModal from './SidebarModal/Fitness.jsx';
import AddTheatreModal from './SidebarModal/Theatre.jsx';

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
  const handleAddHospital = (Hospital) => {
    setAddedHospital(Hospital);
  };
  const handleAddCafe = (Cafe) => {
    setAddedCafe(Cafe);
  };
  const handleAddMall = (Mall) => {
    setAddedMall();
  };
  const handleAddSchool = (School) => {
    setAddedSchool(School);
  };
  const handleAddTheatre = (Theatre) => {
    setAddedTheatre(Theatre);
  };
  const handleAddFittness = (Fittness) => {
    setAddedFittness(Fittness);
  };

  return (
    <div className='sidebar'>
      <div className="sidewrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={() => setAddTouristPlaceModalOpen(true)}>
            <Explore className='sidebarIcon' />
            <span className='sidebarListItemText'>Tourist Places</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsRestaurantModalOpen(true)}>
            <Restaurant className='sidebarIcon' />
            <span className='sidebarListItemText'>Food Spots</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsRestandStayModalOpen(true)}>
            <LocalHotel className='sidebarIcon' />
            <span className='sidebarListItemText'>Rest and Stay</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsHospitalModalOpen(true)}>
            <LocalHospital className='sidebarIcon' />
            <span className='sidebarListItemText'>Hospital</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsCafeModalOpen(true)}>
            <LocalCafe className='sidebarIcon' />
            <span className='sidebarListItemText'>Cafe</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsMallModalOpen(true)}>
            <LocalGroceryStore className='sidebarIcon' />
            <span className='sidebarListItemText'>Shopping Mall</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsSchoolModalOpen(true)}>
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Schools</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsTheatreModalOpen(true)}>
            <Theaters className='sidebarIcon' />
            <span className='sidebarListItemText'>Theaters</span>
          </li>
          <li className="sidebarListItem" onClick={() => setIsFittnessModalOpen(true)}>
            <FitnessCenter className='sidebarIcon' />
            <span className='sidebarListItemText'>Fitness Centers</span>
          </li>
        </ul>
      </div>
      <AddTouristPlaceModal isOpen={isAddTouristPlaceModalOpen} onClose={() => setAddTouristPlaceModalOpen(false)} onAddTouristPlace={handleAddTouristPlace} />
      <AddRestaurantModal isOpen={isRestaurantModalOpen} onClose={() => setIsRestaurantModalOpen(false)} onAddRestaurant={handleAddRestaurant} />
      <AddRestandStayModal isOpen={isRestandStayModalOpen} onClose={() => setIsRestandStayModalOpen(false)} onAddRestandStay={handleAddRestandStay} />
      <AddHospitalModal isOpen={isHospitalModalOpen} onClose={() => setIsHospitalModalOpen(false)} onAddHospital={handleAddHospital} />
      <AddCafeModal isOpen={isCafeModalOpen} onClose={() => setIsCafeModalOpen(false)} onAddCafe={handleAddCafe} />
      <AddMallModal isOpen={isMallModalOpen} onClose={() => setIsMallModalOpen(false)} onAddMall={handleAddMall} />
      <AddSchoolModal isOpen={isSchoolModalOpen} onClose={() => setIsSchoolModalOpen(false)} onAddSchool={handleAddSchool} />
      <AddTheatreModal isOpen={isTheatreModalOpen} onClose={() => setIsTheatreModalOpen(false)} onAddTheatre={handleAddTheatre} />
      <AddFittnessModal isOpen={isFittnessModalOpen} onClose={() => setIsFittnessModalOpen(false)} onAddFittness={handleAddFittness} />
    </div>
  )
}

export default Sidebar
