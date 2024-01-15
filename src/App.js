import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
export default function App() {
  return (
  <>
  <Navbar/>
  <News pagesize="15" country="in" category="general" style={{}} />
  </>
  )
}
