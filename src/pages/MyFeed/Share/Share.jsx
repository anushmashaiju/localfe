
import React, { useContext, useEffect, useRef, useState } from 'react'
import './share.css'
import { Cancel, EmojiEmotions, Label, PermMedia, Room, Send } from '@mui/icons-material'
import { AuthContext } from "../../../context/AuthContext"
import axios from 'axios'



function Share({ setPostchange, postchange }) {
  const { user } = useContext(AuthContext)
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/posts?location=${selectedDistrict}`);
        console.log('Fetched posts based on location:', response.data);
        // Handle the fetched posts as needed
        // Update the state or do any further processing
      } catch (error) {
        console.error('Error fetching posts based on location:', error);
      }
    };

    // Fetch posts whenever the selected location changes
    if (selectedDistrict) {
      fetchPosts();
    }
  }, [selectedDistrict, postchange]);


  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
      location: selectedDistrict !== 'Location' ? selectedDistrict : null,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file)
      data.append("name", fileName)

      console.log(newPost)

      try {
        const res = await axios.post("/upload", data, { headers: { "Content-type": 'multipart/form-data' } })
        console.log(res.data.fileName)
        newPost.image = res.data.fileName;
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axios.post('/posts', newPost);
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
            <span className='shareOptionText'> Photos/Videos</span>
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
          <div className="shareSingleOption">
            <Label htmlColor="green" className='shareIcon' />
            <span className='shareOptionText'> Tag</span>
          </div>
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
          <div className="shareSingleOption">
            <EmojiEmotions htmlColor="orange" className='shareIcon' />
            <span className='shareOptionText'> Feelings</span>
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
