import React from 'react';
import Postre1 from '../Image/P1.jpeg';
import Postre2 from '../Image/P2.jpeg';
import Postre3 from '../Image/P3.jpeg';

const Cards = () => {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre1} 
              className="card-img-top" 
              alt="Postre 1" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 1</h5>
              <p className="card-text">Un delicioso postre para disfrutar cualquier día.</p>
              
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre2} 
              className="card-img-top" 
              alt="Postre 2" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 2</h5>
              <p className="card-text">Este postre es perfecto para compartir con amigos.</p>
              
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre3} 
              className="card-img-top" 
              alt="Postre 3" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 3</h5>
              <p className="card-text">El postre ideal para terminar tu día con un toque dulce.</p>
              
            </div>
          </div>
        </div>
        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre1} 
              className="card-img-top" 
              alt="Postre 1" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 1</h5>
              <p className="card-text">Un delicioso postre para disfrutar cualquier día.</p>
              
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre2} 
              className="card-img-top" 
              alt="Postre 2" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 2</h5>
              <p className="card-text">Este postre es perfecto para compartir con amigos.</p>
              
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre3} 
              className="card-img-top" 
              alt="Postre 3" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 3</h5>
              <p className="card-text">El postre ideal para terminar tu día con un toque dulce.</p>
              
            </div>
          </div>
        </div>
        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre1} 
              className="card-img-top" 
              alt="Postre 1" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 1</h5>
              <p className="card-text">Un delicioso postre para disfrutar cualquier día.</p>
              
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre2} 
              className="card-img-top" 
              alt="Postre 2" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 2</h5>
              <p className="card-text">Este postre es perfecto para compartir con amigos.</p>
              
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img 
              src={Postre3} 
              className="card-img-top" 
              alt="Postre 3" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Postre 3</h5>
              <p className="card-text">El postre ideal para terminar tu día con un toque dulce.</p>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
