
import React, { useState } from 'react';

function AddCafeModal({ isOpen, onClose, onAddCafe }) {
  const [CafeName, setCafeName] = useState('');
  const [CafeLocation, setCafeLocation] = useState('');
  const [addedCafes, setAddedCafes] = useState([]);

  const handleAddCafe = () => {
    if (CafeName.trim() !== '') {
      const newCafe = {
        name: CafeName,
        location: CafeLocation,
      };

      setAddedCafes((prevCafes) => [...prevCafes, newCafe]);
      setCafeName('');
      setCafeLocation('');
    }
  };

  const handleDeleteCafe = (index) => {
    const updatedCafes = addedCafes.filter((_, i) => i !== index);
    setAddedCafes(updatedCafes);
  };

  const handleSave = () => {
    // Send the added Cafes to the parent component
    onAddCafe(addedCafes);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Cafe</h2>

        {/* Cafe Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="CafeName">Cafe Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="CafeName"
          value={CafeName}
          onChange={(e) => setCafeName(e.target.value)}
        />

        {/* Cafe Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="CafeLocation">Cafe Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="CafeLocation"
          value={CafeLocation}
          onChange={(e) => setCafeLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddCafe} > Add
        </button>

        {/* Display added Cafes */}
        {addedCafes.length > 0 && (
          <div>
            <h3>Added Cafes:</h3>
            <ul>
              {addedCafes.map((Cafe, index) => (
                <li key={index}>
                  {Cafe.name} - {Cafe.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteCafe(index)} > Delete
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
            onClick={handleSave} > Save
          </button>
          <button
            style={{ flex: '1', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '5px' }}
            onClick={onClose} >Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCafeModal;
