import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/Navbar.js';
import Footer from '../../component/footer.js';
const RootLayout = () => {
  return (
   <>
   <div sx={{ flexGrow: 1 }}>
      <div container spacing={1} >
        <div item xs={2}>
          <div className='gride'><Navbar/></div>
        </div>
        <div item xs={10}>
            <Outlet/>
        </div>
        <div item xs={2}>
          <div className='gride'><Footer/></div>
        </div>
      </div>
    </div>
    </>

  )
}

export default RootLayout