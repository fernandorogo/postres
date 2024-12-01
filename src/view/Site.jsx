import React from 'react'
import LogoBar from '../Image/Logo.png'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'


const Site = () => {
  return (
    <div>
      <div className="logo-fondo-bar d-flex justify-content-center align-items-start">
        <img src={LogoBar} alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
      </div>

      <Navbar />
      <Carousel />
      <Cards />
    </div>
  )
}

export default Site