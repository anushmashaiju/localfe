
import React, { useState } from 'react';

function AddHospitalModal({ isOpen, onClose, onAddHospital }) {
  const [HospitalName, setHospitalName] = useState('');
  const [HospitalLocation, setHospitalLocation] = useState('');
  const [addedHospitals, setAddedHospitals] = useState([]);

  const handleAddHospital = () => {
    if (HospitalName.trim() !== '') {
      const newHospital = {
        name: HospitalName,
        location: HospitalLocation,
      };

      setAddedHospitals((prevHospitals) => [...prevHospitals, newHospital]);
      setHospitalName('');
      setHospitalLocation('');
    }
  };

  const handleDeleteHospital = (index) => {
    const updatedHospitals = addedHospitals.filter((_, i) => i !== index);
    setAddedHospitals(updatedHospitals);
  };

  const handleSave = () => {
    // Send the added Hospitals to the parent component
    onAddHospital(addedHospitals);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '30%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Hospital</h2>

        {/* Hospital Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="HospitalName">Hospital Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="HospitalName"
          value={HospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />

        {/* Hospital Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="HospitalLocation">Hospital Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="HospitalLocation"
          value={HospitalLocation}
          onChange={(e) => setHospitalLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddHospital}
        >
          Add
        </button>

        {/* Display added Hospitals */}
        {addedHospitals.length > 0 && (
          <div>
            <h3>Added Hospitals:</h3>
            <ul>
              {addedHospitals.map((Hospital, index) => (
                <li key={index}>
                  {Hospital.name} - {Hospital.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteHospital(index)}
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

export default AddHospitalModal;
