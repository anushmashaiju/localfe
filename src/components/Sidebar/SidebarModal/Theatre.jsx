// AddTheatreModal.jsx
import React, { useState } from 'react';

function AddTheatreModal({ isOpen, onClose, onAddTheatre }) {
  const [TheatreName, setTheatreName] = useState('');
  const [TheatreLocation, setTheatreLocation] = useState('');
  const [addedTheatres, setAddedTheatres] = useState([]);

  const handleAddTheatre = () => {
    if (TheatreName.trim() !== '') {
      const newTheatre = {
        name: TheatreName,
        location: TheatreLocation,
      };

      setAddedTheatres((prevTheatres) => [...prevTheatres, newTheatre]);
      setTheatreName('');
      setTheatreLocation('');
    }
  };

  const handleDeleteTheatre = (index) => {
    const updatedTheatres = addedTheatres.filter((_, i) => i !== index);
    setAddedTheatres(updatedTheatres);
  };

  const handleSave = () => {
    // Send the added Theatres to the parent component
    onAddTheatre(addedTheatres);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Theatre</h2>

        {/* Theatre Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="TheatreName">Theatre Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="TheatreName"
          value={TheatreName}
          onChange={(e) => setTheatreName(e.target.value)}
        />

        {/* Theatre Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="TheatreLocation">Theatre Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="TheatreLocation"
          value={TheatreLocation}
          onChange={(e) => setTheatreLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddTheatre}
        >
          Add
        </button>

        {/* Display added Theatres */}
        {addedTheatres.length > 0 && (
          <div>
            <h3>Added Theatres:</h3>
            <ul>
              {addedTheatres.map((Theatre, index) => (
                <li key={index}>
                  {Theatre.name} - {Theatre.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteTheatre(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Buttons */}
        <div style={{ display: 'flex', marginTop: '10px' }} className="modalButtons">
          <button
            style={{ flex: '1', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '5px' }}
            onClick={handleSave}
          >
            Save
          </button>

          <button
            style={{ flex: '1', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '5px' }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTheatreModal;
