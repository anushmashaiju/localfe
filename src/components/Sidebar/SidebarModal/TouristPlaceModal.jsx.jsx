// AddTouristPlaceModal.jsx
import React, { useState } from 'react';
import './TouristPlaceModal.css';

function AddTouristPlaceModal({ isOpen, onClose, onAddTouristPlace }) {
  const [touristPlace, setTouristPlace] = useState('');
  const [addedTouristPlaces, setAddedTouristPlaces] = useState([]);

  const handleAddTouristPlace = () => {
    if (touristPlace.trim() !== '') {
      setAddedTouristPlaces((prevPlaces) => [...prevPlaces, touristPlace]);
      setTouristPlace('');
    }
  };

  const handleDeleteTouristPlace = (index) => {
    const updatedPlaces = addedTouristPlaces.filter((_, i) => i !== index);
    setAddedTouristPlaces(updatedPlaces);
  };

  const handleSave = () => {
    // Send the added tourist places to the parent component
    onAddTouristPlace(addedTouristPlaces);
    // Close the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modalContent">
        <h2>Add Tourist Place</h2>
        <label htmlFor="touristPlace">Tourist Place:</label>
        <input
          type="text"
          id="touristPlace"
          value={touristPlace}
          onChange={(e) => setTouristPlace(e.target.value)}
        />
        <button className="modalContentbutton" onClick={handleAddTouristPlace}>Add</button>

        {/* Display added tourist places */}
        {addedTouristPlaces.length > 0 && (
          <div>
            <h3>Added Tourist Places:</h3>
            <ul>
              {addedTouristPlaces.map((place, index) => (
                <li key={index}>
                  {place}
                  <button className="modalContentbuttondelete"onClick={() => handleDeleteTouristPlace(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="modalButtons">
          <button className="modalContentbutton"onClick={handleSave}>Save</button>
          <button className="modalContentbutton"onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddTouristPlaceModal;
