/*import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import './Home.css'

function Home() {
  return (
    <>
  <Navbar/>
  <div className='homeContainer'>
  <Sidebar/>
<Feed/>
<Rightbar/>
  </div>

  </>
  )
}

export default Home
*/
// Home.jsx
import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios';
import Scroll from '../../components/Scroll/scroll';
import Post from '../../components/Post/Post';
import Rightbar from '../../components/Rightbar/Rightbar';
import { AuthContext } from '../../context/AuthContext';

function Home() {
  const [postchange, setPostchange] = useState(true);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const [selectedLocation, setSelectedLocation] = useState('');
  useEffect(() => {
    fetchPosts();
  }, [user._id, postchange]);

  const fetchPosts = async () => {
    const res = await axios.get(`http://localhost:8800/api/posts/timeline/${user._id}`);
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };
 
  //const handleLocationChange = (district) => {
    //setSelectedDistrict(district);
    // Handle other location change logic if needed
 // };
  return (
    <>
    {/* <Navbar setSelectedLocation={setSelectedLocation} /> */}
    <Navbar setSelectedLocation={setSelectedLocation} />
            <Scroll selectedDistrict={selectedLocation} />
      <div className='homeContainer'>
        <Sidebar />
        <div className='feed'>
          <div className='feedWrapper'>
        
          
            {posts.map((p) => (
  <Post key={p._id} post={p} currentUser={user} postchange={postchange} setPostchange={setPostchange} />
))}
          </div>
        </div>
        <Rightbar />
      </div>
    </>
  );
}

export default Home;

