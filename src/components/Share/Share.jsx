import React from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room, Send } from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <input placeholder='What is in your mind?' className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className='shareMiddle'>
          <div className="shareOptions">
            <PermMedia htmlColor="blue" className='shareIcon' />
            <span className='shareOptionText'> Photos/Videos</span>
          </div>
          </div>
        <div className='shareBottom'>
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
          <button className='shareButton'>Share
            <Send htmlColor="white" className='sendIcon' />
          </button>

        </div>
      </div>
    </div>
  )
}

export default Share
