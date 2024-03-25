
import React, { useState } from 'react';

function AddSchoolModal({ isOpen, onClose, onAddSchool }) {
  const [SchoolName, setSchoolName] = useState('');
  const [SchoolLocation, setSchoolLocation] = useState('');
  const [addedSchools, setAddedSchools] = useState([]);

  const handleAddSchool = () => {
    if (SchoolName.trim() !== '') {
      const newSchool = {
        name: SchoolName,
        location: SchoolLocation,
      };

      setAddedSchools((prevSchools) => [...prevSchools, newSchool]);
      setSchoolName('');
      setSchoolLocation('');
    }
  };

  const handleDeleteSchool = (index) => {
    const updatedSchools = addedSchools.filter((_, i) => i !== index);
    setAddedSchools(updatedSchools);
  };

  const handleSave = () => {
    // Send the added Schools to the parent component
    onAddSchool(addedSchools);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '30%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add School</h2>

        {/* School Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="SchoolName">School Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="SchoolName"
          value={SchoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />

        {/* School Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="SchoolLocation">School Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="SchoolLocation"
          value={SchoolLocation}
          onChange={(e) => setSchoolLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddSchool}
        >
          Add
        </button>

        {/* Display added Schools */}
        {addedSchools.length > 0 && (
          <div>
            <h3>Added Schools:</h3>
            <ul>
              {addedSchools.map((School, index) => (
                <li key={index}>
                  {School.name} - {School.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteSchool(index)}
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

export default AddSchoolModal;
