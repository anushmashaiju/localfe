// AddRestaurantModal.jsx
import React, { useState } from 'react';

function AddRestaurantModal({ isOpen, onClose, onAddRestaurant }) {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const [addedRestaurants, setAddedRestaurants] = useState([]);

  const handleAddRestaurant = () => {
    if (restaurantName.trim() !== '') {
      const newRestaurant = {
        name: restaurantName,
        location: restaurantLocation,
      };

      setAddedRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
      setRestaurantName('');
      setRestaurantLocation('');
    }
  };

  const handleDeleteRestaurant = (index) => {
    const updatedRestaurants = addedRestaurants.filter((_, i) => i !== index);
    setAddedRestaurants(updatedRestaurants);
  };

  const handleSave = () => {
    // Send the added restaurants to the parent component
    onAddRestaurant(addedRestaurants);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }} className="modal">
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '400px' }} className="modalContent">
        <h2 style={{ textAlign: 'center' }}>Add Restaurant</h2>

        {/* Restaurant Name */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="restaurantName">Restaurant Name:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="restaurantName"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />

        {/* Restaurant Location */}
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="restaurantLocation">Restaurant Location:</label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
          type="text"
          id="restaurantLocation"
          value={restaurantLocation}
          onChange={(e) => setRestaurantLocation(e.target.value)}
        />

        {/* Add Button */}
        <button
          style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(142, 5, 101)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddRestaurant}
        >
          Add
        </button>

        {/* Display added restaurants */}
        {addedRestaurants.length > 0 && (
          <div>
            <h3>Added Restaurants:</h3>
            <ul>
              {addedRestaurants.map((restaurant, index) => (
                <li key={index}>
                  {restaurant.name} - {restaurant.location}
                  <button
                    style={{ backgroundColor: 'rgb(142, 5, 101)', padding: '10px',color: '#fff', marginLeft: '20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => handleDeleteRestaurant(index)}
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

export default AddRestaurantModal;
