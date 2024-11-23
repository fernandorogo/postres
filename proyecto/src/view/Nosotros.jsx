import React from 'react'
import LogoBar from '../Image/Logo.png'
import Navbar from '../components/Navbar'


const Nosotros = () => {
  return (
    <div>
      <div className="logo-bar d-flex justify-content-center align-items-start logo-bar">
        <img src={LogoBar} alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
      </div>

      <Navbar />


      <div className='container-fluid fondo-nosotros'>

        <div className='row container-flex'>
          <div className='col d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <p className='text-center'>
              En Postres Mágicos Dejave somos un equipo de apasionados
              reposteros y creativos que creen que los postres no solo deben ser sabrosos, sino también una experiencia única. Nos especializamos en crear postres artesanales con ingredientes frescos y de alta calidad, siempre pensando en los detalles y en la satisfacción de nuestros clientes. Nuestra misión es hacer que cada bocado sea un momento especial, lleno de sabor, alegría y ese toque personal que nos caracteriza.
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

export default Nosotros