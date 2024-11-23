import React from 'react'
import { Link } from 'react-router-dom'
import Postre1 from '../Image/Postre1.jpg'
import Postre2 from '../Image/Postre2.jpg'
import Postre3 from '../Image/Postre3.jpg'

const Cards = () => {
    return (
        <div className="container py-4">
  <div className="row justify-content-center">
    {/* Card 1 */}
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={Postre1} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} alt="Postre 1" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={Postre2} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} alt="Postre 2" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={Postre3} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} alt="Postre 3" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Cards