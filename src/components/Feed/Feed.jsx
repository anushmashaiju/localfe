import React, { useContext, useEffect, useState } from 'react'
import "./feed.css"
import Share from '../Share/Share'
import Post from '../Post/Post'
//import {Posts} from '../../dummyData'
import axios from 'axios'
import Scroll from '../Scroll/scroll'
import { AuthContext } from '../../context/AuthContext'


function Feed() {
  const [posts, setPosts] = useState([]);
const {user}= useContext(AuthContext)
  useEffect(() => {
    const fetchPosts = async () => {
     // const res = await axios.get("posts/timeline/"+ user._id)
     const res = await axios.get("http://localhost:8800/api/posts/timeline/" + user._id);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt)- new Date (p1.createdAt);  //p1= post1 ,p2= post2
      })) 
    };
    fetchPosts()

  }, [user._id])
/*
const fetchPosts = async () => {
  try {
   const response = await axios.get('/api/posts');  // Update the URL as needed
  console.log('Posts data:', response.data);
    // Handle the received data as needed
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Handle the error, show a message, or redirect the user
  }
};

useEffect(() => {
  fetchPosts();  // Call the fetchPosts function when the component mounts
}, []);  // The empty dependency array ensures it runs only once when the component mounts
*/
  return (
    <div className='feed'>

      <div className="feedWrapper">
        <Scroll/>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
