import React from 'react'
import "./rightbar.css"
import { EventNote, Today } from '@mui/icons-material'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rigtbarWrapper">
        <ul className="rightbarBox">
          <li className="rightbarListItem">
            <Today className='rightbarIcon' />
            <span className='rightbarListItemText'>Today's Events</span>
          </li>
          <div className="todaysEventsContainer">
            <ul className="todaysEventsList">
              <li className="eventItem">Event 1</li>
              <li className="eventItem">Event 2</li>
              <li className="eventItem">Event 3</li>
              <li className="eventItem">Event 4</li>
              {/* Add more events as needed */}
            </ul>
          </div>
        </ul>
        <ul className="rightbarBox">
          <li className="rightbarListItem">
            <EventNote className='rightbarIcon' />
            <span className='rightbarListItemText'>Upcoming Events</span>
          </li>
          <div className="todaysEventsContainer">
            <ul className="todaysEventsList">
              <li className="eventItem">Event 1</li>
              <li className="eventItem">Event 2</li>
              <li className="eventItem">Event 3</li>
              <li className="eventItem">Event 4</li>
              <li className="eventItem">Event 5</li>
              <li className="eventItem">Event 6</li>
              <li className="eventItem">Event 7</li>
              <li className="eventItem">Event 8</li>
              <li className="eventItem">Event 9</li>
              {/* Add more events as needed */}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
