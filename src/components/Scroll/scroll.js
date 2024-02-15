import React from 'react'
import './scroll.css'
function Scroll() {
  return (
   
      <div className="scroll">
<marquee
    behavior='scroll'
    direction='right'
    className="rolling-booking"
>
    <h3 className="scrolltext">Welcome to</h3>
</marquee>
</div>
  
  )
}

export default Scroll

