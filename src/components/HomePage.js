import React from 'react'
import Navbar from './Navbar'
// import News from './News'
import { Outlet } from 'react-router-dom'
export default function HomePage() {
  return (
    <div>
      <>
       <Navbar />
      
        <Outlet/>
      </>
    </div>
  )
}
