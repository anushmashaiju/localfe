import { Person, Cancel, Send } from '@mui/icons-material';
import './EditProfileModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const EditProfileModal = ({ isOpen, onRequestClose }) => {

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
        />
        <label htmlFor="profilePicture">New Profile Picture:</label>
        <input
          type="file"
          id="profilePicture"
          accept=".png, .jpg, .jpeg"
        />
      </div>
      <div className="editProfileFooter">
        <button >
          Save
          <Send htmlColor="white" className="sendIcon" />
        </button>
        <Cancel />
      </div>
    </Modal>
  );
};

export default EditProfileModal;
