
import React, { useState } from 'react';

function AddMallModal({ isOpen, onClose, onAddMall }) {
  const [MallName, setMallName] = useState('');
  const [MallLocation, setMallLocation] = useState('');
  const [addedMalls, setAddedMalls] = useState([]);

  const handleAddMall = () => {
    if (MallName.trim() !== '') {
      const newMall = {
        name: MallName,
        location: MallLocation,
      };

      setAddedMalls((prevMalls) => [...prevMalls, newMall]);
      setMallName('');
      setMallLocation('');
    }
  };

  const handleDeleteMall = (index) => {
    const updatedMalls = addedMalls.filter((_, i) => i !== index);
    setAddedMalls(updatedMalls);
  };

  const handleSave = () => {
    // Send the added Malls to the parent component
    onAddMall(addedMalls);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '30%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Shopping Mall</h2>

        {/* Mall Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="MallName">Shopping Mall Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="MallName"
          value={MallName}
          onChange={(e) => setMallName(e.target.value)}
        />

        {/* Mall Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="MallLocation">Shopping Mall Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="MallLocation"
          value={MallLocation}
          onChange={(e) => setMallLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddMall}
        >
          Add
        </button>

        {/* Display added Malls */}
        {addedMalls.length > 0 && (
          <div>
            <h3>Added Malls:</h3>
            <ul>
              {addedMalls.map((Mall, index) => (
                <li key={index}>
                  {Mall.name} - {Mall.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteMall(index)}
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

export default AddMallModal;
