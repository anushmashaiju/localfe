// AddFittnessModal.jsx
import React, { useState } from 'react';

function AddFittnessModal({ isOpen, onClose, onAddFittness }) {
  const [FittnessName, setFittnessName] = useState('');
  const [FittnessLocation, setFittnessLocation] = useState('');
  const [addedFittnesss, setAddedFittnesss] = useState([]);

  const handleAddFittness = () => {
    if (FittnessName.trim() !== '') {
      const newFittness = {
        name: FittnessName,
        location: FittnessLocation,
      };

      setAddedFittnesss((prevFittnesss) => [...prevFittnesss, newFittness]);
      setFittnessName('');
      setFittnessLocation('');
    }
  };

  const handleDeleteFittness = (index) => {
    const updatedFittnesss = addedFittnesss.filter((_, i) => i !== index);
    setAddedFittnesss(updatedFittnesss);
  };

  const handleSave = () => {
    // Send the added Fittnesss to the parent component
    onAddFittness(addedFittnesss);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Fittness Centre</h2>

        {/* Fittness Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="FittnessName">Fittness centre Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="FittnessName"
          value={FittnessName}
          onChange={(e) => setFittnessName(e.target.value)}
        />

        {/* Fittness Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="FittnessLocation">Fittness centre Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="FittnessLocation"
          value={FittnessLocation}
          onChange={(e) => setFittnessLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddFittness}
        >
          Add
        </button>

        {/* Display added Fittnesss */}
        {addedFittnesss.length > 0 && (
          <div>
            <h3>Added Fittnesss:</h3>
            <ul>
              {addedFittnesss.map((Fittness, index) => (
                <li key={index}>
                  {Fittness.name} - {Fittness.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteFittness(index)}
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

export default AddFittnessModal;
