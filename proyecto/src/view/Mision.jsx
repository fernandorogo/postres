import React from 'react'
import LogoBar from '../Image/Logo.png'
import Navbar from '../components/Navbar'


const Mision = () => {
  return (
    <div>
      <div className="logo-bar d-flex justify-content-center align-items-start logo-bar">
        <img src={LogoBar} alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
      </div>

      <Navbar />


      <div className='container-fluid fondo-mision'>

        <div className='row container-flex'>
          <div className='col d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <p className='text-center'>
            En Postres Mágicos Dejave, nuestra misión es crear postres artesanales de alta calidad, utilizando ingredientes frescos y naturales para ofrecer una experiencia única que combine sabor, creatividad y cariño. Nos apasiona endulzar momentos especiales, brindando productos deliciosos que transmiten alegría y un toque personal. Nos destacamos por ofrecer atención personalizada, asegurando que cada pedido sea único. En Postres Mágicos Dejave, no solo horneamos postres, sino momentos memorables.
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

export default Mision