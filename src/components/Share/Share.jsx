
import React, { useContext, useRef, useState } from 'react'
import './share.css'
import { Cancel, PermMedia, Room, Send } from '@mui/icons-material'
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'

function Share({ setPostchange, postchange }) {
  const { user } = useContext(AuthContext)
  const description = useRef()
  const [file, setFile] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(''); // State to store the selected district

  const districts = ['Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'];

  const handleDistrictSelection = (district) => {
    setSelectedDistrict(district);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = new FormData();
    newPost.append("userId", user._id);
    newPost.append("description", description.current.value);
    newPost.append("location", selectedDistrict !== 'Location' ? selectedDistrict : '');

    if (file) {
      newPost.append("image", file);
    }

    try {
      await axios.post(`${BASE_URL}/api/posts`, newPost);
      setPostchange(!postchange);
      // Clear input values after posting
      description.current.value = '';
      setFile(null);
      setSelectedDistrict(''); // Clear selected district
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <input placeholder='What is in your mind?' className='shareInput' ref={description} />
        </div>
        <hr className='shareHr' />
        <div className='shareMiddle'>
          <label htmlFor='file' className="shareOptions">
            <PermMedia htmlColor="blue" className='shareIcon' />
            <span className='shareOptionText'> Photos</span>
            <input style={{ display: 'none' }} type='file' id="file" accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
          </label>
        </div>
        {file && (
          <div className='shareImgContainer'>
            <img className='shareImg' src={URL.createObjectURL(file)} alt="" />
            <Cancel className='shareCancelImg' onClick={() => setFile(null)} />
          </div>
        )}
        <form className='shareBottom' onSubmit={submitHandler}>

          <div className="shareSingleOption"  >
            <Room htmlColor="red" className='shareIcon' />
            <span className="shareOptionText" onClick={toggleDropdown}>
              {selectedDistrict || 'Location'}
            </span>
            {isDropdownOpen && (
              <div className="sharedropdown">
                {districts.map((district, index) => (
                  <div key={index} className="sharedropdownItem" onClick={() => handleDistrictSelection(district)}>
                    {district}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className='shareButton' type='submit'>Share
            <Send htmlColor="white" className='sendIcon' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Share
