import React, { useState } from 'react'
import "./rightbar.css"
import { EventNote, Today } from '@mui/icons-material'
import axios from 'axios';

function Rightbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addEvent, setAddEvent] = useState({
    date: '',
    eventname: '',
    description: '',
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setAddEvent({ ...addEvent, [e.target.name]: e.target.value });
  };


  /*const onSubmit = () => {
    axios.post('/api/events/addEvent', { date: addEvent.date, eventName: addEvent.eventname, description: addEvent.description })
      .then((res) => {
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };
*/
const onSubmit = async () => {
  try {
    const res = await axios.post('/api/events/addEvent', {
      date: addEvent.date,
      eventName: addEvent.eventname,
      description: addEvent.description,
    });

    // Check if the request was successful
    if (res.status === 200) {
      closeModal();
      // Optionally, you can update the UI or perform any other actions upon successful submission
    } else {
      console.error('Failed to add event. Unexpected response:', res);
      // Handle the error or show a user-friendly message
    }
  } catch (error) {
    console.error('Error adding event:', error);
    // Handle the error or show a user-friendly message
  }
};

  return (
    <div className='rightbar'>
      <div className="rigtbarWrapper">
        
        <button className="addEventButton" onClick={openModal}>Add Event</button>

{/* Modal */}
{isModalOpen && (
  <div className="modalEvent">
    <div className="modalContentEvent">
      <span onClick={closeModal} className="closeModalButton">&times;</span>
      <h2>Add Event</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        {/* Add your form elements (e.g., date, name, type, description) */}
        <label>Date:</label>
        <input type="date" name="date" value={addEvent.date}
                  onChange={handleChange} required />
        <label>Name of Event:</label>
        <input type="text" name="eventname"value={addEvent.eventname}
                  onChange={handleChange} required />
        <label>Description:</label>
        <textarea name="description" value={addEvent.description}
                  onChange={handleChange}required></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
)}

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
