import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Share from '../../components/Share/Share.jsx';
import { AuthContext } from '../../context/AuthContext.js';
import axios from 'axios';
import Post from '../../components/PostHome/PostHome.jsx';
import './AddPost.css';
import { BASE_URL } from '../../constants/constants.js';

function AddPost() {
  const [postchange, setPostchange] = useState(true);
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("User:", user); // Check the user object
    if (user && user._id) {
      fetchPosts();
    }
  }, [user, postchange]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/posts/timeline/${user._id}`);
      console.log("API Response:", res.data); // Check the API response

      if (Array.isArray(res.data)) {
        const sortedPosts = res.data
          .filter(post => post.createdAt)
          .map(post => ({ ...post, createdAt: new Date(post.createdAt) }))
          .sort((p1, p2) => p2.createdAt - p1.createdAt);

        setPosts(sortedPosts);
      } else {
        console.error('Invalid data received from the API. Expected an array:', res.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='addPost'>
        <Share postchange={postchange} setPostchange={setPostchange} />
        <div className='addfeed'>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((p) => (
              <Post key={p._id} post={p} currentUser={user} postchange={postchange} setPostchange={setPostchange} />
            ))
          ) : (
            <p><h1>No posts </h1></p>
          )}
        </div>
      </div>
    </>
  );
}

export default AddPost;

