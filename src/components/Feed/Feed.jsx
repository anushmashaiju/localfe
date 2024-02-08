import React, { useEffect, useState } from 'react'
import "./feed.css"
import Share from '../Share/Share'
import Post from '../Post/Post'
//import {Posts} from '../../dummyData'
import axios from 'axios'

function Feed() {
  const [posts,setPosts]=useState([]);


  useEffect(()=>{
    const fetchPosts =async()=>{
const res =axios.get("posts/timeline/65bcd39522892eb26c1dbdd4")
console.log(res)
    };
    fetchPosts()

  },[])

  return (
    <div className='feed'>
  
      <div className="feedWrapper">
        <Share/>
       {/*Posts.map((p)=>(
        <Post key={p.id} post={p}/>
       ))*/}
      </div>
    </div>
  )
}

export default Feed
