import React, { useContext, useRef, useState } from 'react';
import { Person, Cancel, Send } from '@mui/icons-material';
import './EditProfileModal.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditProfileModal = ({ isOpen, onRequestClose, onProfileUpdate }) => {
  const { user, dispatch } = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState(user.userName);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const fileInput = useRef();

  const handleSave = async () => {
    try {
      const apiUrl = 'http://localhost:3000/api/users/update-username';
      console.log('Save button clicked');

      // Update the username in the database
      const updatedUser = await axios.put(apiUrl, {
        userId: user._id,
        newUsername: newUsername,
      });

      console.log('After axios.put', updatedUser.data);

      // Check if a new profile picture is selected
      if (newProfilePicture) {
        const data = new FormData();
        const fileName = Date.now() + newProfilePicture.name;
        data.append('file', newProfilePicture);
        data.append('name', fileName);

        // Upload the new profile picture
        const res = await axios.post('/upload', data, {
          headers: { 'Content-type': 'multipart/form-data' },
        });

        console.log('After axios.post', res.data);

        // Update the user profile picture and username in the context
        dispatch({
          type: 'UPDATE_USER',
          payload: {
            user: {
              ...user,
              userName: newUsername,
              profilePicture: res.data.fileName,
            },
          },
        });
      } else {
        // No new profile picture, update only the username in the context
        dispatch({
          type: 'UPDATE_USER',
          payload: {
            user: {
              ...user,
              userName: newUsername,
            },
          },
        });
      }

      // Call the external handler for further updates
      onProfileUpdate(newUsername, newProfilePicture);

      console.log('Before onRequestClose');
      // Close the modal
      onRequestClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Profile Modal"
      className="editProfileModal"
      overlayClassName="editProfileOverlay"
    >
      <div className="editProfileHeader">
        <Person className="editProfileIcon" />
        <span>Edit Profile</span>
      </div>
      <div className="editProfileContent">
        <label htmlFor="newUsername">New Username:</label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label htmlFor="profilePicture">New Profile Picture:</label>
        <input
          type="file"
          id="profilePicture"
          ref={fileInput}
          accept=".png, .jpg, .jpeg"
          onChange={(e) => setNewProfilePicture(e.target.files[0])}
        />
      </div>
      <div className="editProfileFooter">
        <button onClick={handleSave}>
          Save
          <Send htmlColor="white" className="sendIcon" />
        </button>
        <Cancel onClick={onRequestClose} />
      </div>
    </Modal>
  );
};

export default EditProfileModal;
