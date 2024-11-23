import React from 'react';
import LogoBar from '../Image/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={LogoBar} alt="" className="img-fluid" style={{ width: '100px', height: '100px' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* mx-auto para centrar */}
              <li className="nav-item">
                <Link to='/site' className="nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to='/nosotros' className="nav-link active" aria-current="page">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to='/mision' className="nav-link active" aria-current="page">Misión</Link>
              </li>
              <li className="nav-item">
                <Link to='/vision' className="nav-link active" aria-current="page">Visión</Link>
              </li>
              
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
