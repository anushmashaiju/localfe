import React from 'react'
import "./sidebar.css"
import { AdsClick,  Build,  Event, Explore,  FitnessCenter,  LocalCafe, LocalGasStation, LocalGroceryStore, LocalHospital, LocalHotel, Restaurant, RssFeed, School, Theaters } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidewrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>News Feed</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className='sidebarListItemText'>Event</span>
          </li>
          <li className="sidebarListItem">
            <AdsClick className='sidebarIcon' />
            <span className='sidebarListItemText'>Advertisement</span>
          </li>
          <li className="sidebarListItem">
            <Explore className='sidebarIcon' />
            <span className='sidebarListItemText'>Tourist Places</span>
          </li>
          <li className="sidebarListItem">
            <Restaurant className='sidebarIcon' />
            <span className='sidebarListItemText'>Restaurent</span>
          </li>           
          <li className="sidebarListItem">
            <LocalHotel className='sidebarIcon' />
            <span className='sidebarListItemText'>Rest and Stay</span>
          </li>
          <li className="sidebarListItem">
            <LocalHospital className='sidebarIcon' />
            <span className='sidebarListItemText'>Hospital</span>
          </li>
          <li className="sidebarListItem">
            <LocalGasStation className='sidebarIcon' />
            <span className='sidebarListItemText'>Pump</span>
          </li>
          <li className="sidebarListItem">
            <LocalCafe className='sidebarIcon' />
            <span className='sidebarListItemText'>Cafe</span>
          </li>
          <li className="sidebarListItem">
            <LocalGroceryStore className='sidebarIcon' />
            <span className='sidebarListItemText'>Shopping</span>
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
          <li className="sidebarListItem">
            <Build className='sidebarIcon' />
            <span className='sidebarListItemText'>Workshops</span>
          </li>
        </ul>
        

      </div>
    </div>
  )
}

export default Sidebar
