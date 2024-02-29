// components/Timeline.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';

const Timeline = () => {
  const [friendsPosts, setFriendsPosts] = useState([]);

  useEffect(() => {
    const fetchFriendsPosts = async () => {
      try {
        const response = await axios.get('/api/friends/posts');
        setFriendsPosts(response.data);
      } catch (error) {
        console.error('Error fetching friends posts:', error);
      }
    };

    fetchFriendsPosts();
  }, []); // Fetch friends' posts once on component mount

  return (
    <div>
      <h2>Timeline</h2>
      {friendsPosts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
