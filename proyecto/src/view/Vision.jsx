import React from 'react'
import LogoBar from '../Image/Logo.png'
import Navbar from '../components/Navbar'


const Vision = () => {
  return (
    <div>
      <div className="logo-bar d-flex justify-content-center align-items-start logo-bar">
        <img src={LogoBar} alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
      </div>

      <Navbar />


      <div className='container-fluid fondo-vision'>

        <div className='row container-flex'>
          <div className='col d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <p className='text-center'>
            La visión de Postres Mágicos Dejave es ser la marca líder en postres artesanales de calidad, reconocida por su originalidad, frescura y experiencia única. Queremos ser la opción preferida para quienes buscan una experiencia dulce y personalizada, haciendo cada celebración inolvidable. Nos comprometemos a innovar constantemente, utilizar ingredientes naturales y locales, y brindar atención detallada, con el objetivo de expandir nuestra presencia y crear una comunidad apasionada por nuestros postres.
            </p>
          </div>
          <div className='col'>
            {/* Aquí puedes agregar más contenido si lo deseas */}
          </div>
        </div>

      </div>


    </div>
  )
}

export default Vision