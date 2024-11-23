import React from 'react'
import LogoBar from '../Image/Logo.png'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'


const Site = () => {
  return (
    <div>
      <div className="logo-bar d-flex justify-content-center align-items-start logo-bar">
        <img src={LogoBar} alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
      </div>

      <Navbar />
      <Carousel />
      <Cards />
    </div>
  )
}

export default Site