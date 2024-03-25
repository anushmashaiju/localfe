
import React, { useState } from 'react';

function AddRestandStayModal({ isOpen, onClose, onAddRestandStay }) {
  const [RestandStayName, setRestandStayName] = useState('');
  const [RestandStayLocation, setRestandStayLocation] = useState('');
  const [addedRestandStay, setAddedRestandStay] = useState([]);

  const handleAddRestandStay = () => {
    if (RestandStayName.trim() !== '') {
      const newRestandStay = {
        name: RestandStayName,
        location: RestandStayLocation,
      };

      setAddedRestandStay((prevRestandStay) => [...prevRestandStay, newRestandStay]);
      setRestandStayName('');
      setRestandStayLocation('');
    }
  };

  const handleDeleteRestandStay = (index) => {
    const updatedRestandStay = addedRestandStay.filter((_, i) => i !== index);
    setAddedRestandStay(updatedRestandStay);
  };

  const handleSave = () => {
    // Send the added restaurants to the parent component
    onAddRestandStay(addedRestandStay);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '30%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Rest and Stay Hub</h2>

        {/* Restaurant Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="restaurantName">Rest and Stay Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="restaurantName"
          value={RestandStayName}
          onChange={(e) => setRestandStayName(e.target.value)}
        />

        {/* Restaurant Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="restaurantLocation">Rest and Stay Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="RestandStayLocation"
          value={RestandStayLocation}
          onChange={(e) => setRestandStayLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddRestandStay}
        >
          Add
        </button>

        {/* Display added restaurants */}
        {addedRestandStay.length > 0 && (
          <div>
            <h3>Added Restaurants:</h3>
            <ul>
              {addedRestandStay.map((RestandStay, index) => (
                <li key={index}>
                  {RestandStay.name} - {RestandStay.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteRestandStay(index)} > Delete
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
            onClick={handleSave} >Save
          </button>
          <button
            style={{ flex: '1', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '5px' }}
            onClick={onClose}> Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRestandStayModal;
