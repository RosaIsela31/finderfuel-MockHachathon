import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Landing from '../components/landing/Landing';
import Header from '../components/header/Header';


const LandingView = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Navbar />
    </div>
  )
}

export default LandingView;