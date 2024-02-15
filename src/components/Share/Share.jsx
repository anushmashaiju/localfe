
import React, { useContext, useRef, useState } from 'react'
import './share.css'
import { Cancel, EmojiEmotions, Label, PermMedia, Room, Send } from '@mui/icons-material'
import {AuthContext} from "../../context/AuthContext"
import axios from 'axios'

function Share() {
  const {user}=useContext(AuthContext)
 // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 const description =useRef()
const[file,setFile]=useState(null)

const submitHandler =async(e)=>{
  e.preventDefault()
  const newPost ={
    userId:user._id,
    description:description.current.value
  }
  if(file){
    const data =new FormData();
    const fileName= Date.now() + file.name;
    data.append("file",file)
    data.append("name",fileName)
    
    console.log(newPost)
    try{
const res= await axios.post("/upload",data,{headers:{"Content-type":'multipart/form-data'}})
console.log(res.data.fileName)
newPost.image = res.data.fileName;
}catch(err){
      console.log(err)
    }
  }
try{

  await axios.post("/posts",newPost)
 window.location.reload()
}catch(err){}
}
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
            <input style={{display:'none'}}type='file' id="file" accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
          </label>
          </div>
          {file && (
            <div className='shareImgContainer'>
       <img className='shareImg'src={URL.createObjectURL(file)} alt=""   />
              <Cancel className='shareCancelImg' onClick ={()=> setFile(null)}/>
              </div>
          )}
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className="shareSingleOption">
            <Label htmlColor="green" className='shareIcon' />
            <span className='shareOptionText'> Tag</span>
          </div>
          <div className="shareSingleOption">
            <Room htmlColor="red" className='shareIcon' />
            <span className='shareOptionText'> Location</span>
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
