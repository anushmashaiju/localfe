import React, { useEffect, useState } from 'react'
import "./rightbar.css"
import { EventNote } from '@mui/icons-material'
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';

function Rightbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addEvent, setAddEvent] = useState({
    date: '',
    eventname: '',
    location: '',
    description: '',
  });
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const fetchUpcomingEvents = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/events/upcomingEvents`);
      if (res.status === 200) {
        const sortedEvents = res.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setUpcomingEvents(sortedEvents);
      } else {
        console.error('Failed to fetch upcoming events. Unexpected response:', res);
      }
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
    }
  };

  useEffect(() => {
    fetchUpcomingEvents(); // This line calls the function when the component mounts
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setAddEvent({ ...addEvent, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/events/addEvent`, {
        date: addEvent.date,
        eventname: addEvent.eventname,
        location: addEvent.location,
        description: addEvent.description,
      });

      if (res.status === 200) {
        closeModal();
        fetchUpcomingEvents(); // Fetch updated list of events after successful submission
      } else {
        console.error('Failed to add event. Unexpected response:', res);
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  const handleDelete = async (eventId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/events/${eventId}`);

      if (res.status === 200) {
        // Update the list of upcoming events after successful deletion
        fetchUpcomingEvents();
      } else {
        console.error('Failed to delete event. Unexpected response:', res);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
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
                <input type="date" name="date" value={addEvent.date} onChange={handleChange} required />
                <label>Name of Event:</label>
                <input type="text" name="eventname" value={addEvent.eventname} onChange={handleChange} required />
                <label>Location:</label>
                <input type="text" name="location" value={addEvent.location} onChange={handleChange} required />
                <label>Description:</label>
                <textarea name="description" value={addEvent.description} onChange={handleChange} required />
                <button type="submit" onSubmit={onSubmit}>Add</button>
              </form>
            </div>
          </div>
        )}

        <ul className="rightbarBox">
          <li className="rightbarListItem">
            <EventNote className='rightbarIcon' />
            <span className='rightbarListItemText'>Upcoming Events</span>
          </li>
          <div className="todaysEventsContainer">
            <ul className="todaysEventsList">
              {upcomingEvents.map((event) => (
                <li className="eventItem" key={event._id}>
                  <span>{new Date(event.date).toLocaleDateString()} - {event.eventname} - {event.location} - {event.description}</span>
                  <button className="eventDelete" onClick={() => handleDelete(event._id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
