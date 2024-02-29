import React, {  useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Share from './Share/Share.jsx'


function MyFeed() {
  const [postchange, setPostchange] = useState(true);


 
 
  return (
    <>
    <div className='MyFeed'>
      <Navbar/>

      <Share postchange={postchange} setPostchange={setPostchange} />
            
  </div>
    </>
  )
}

export default MyFeed
