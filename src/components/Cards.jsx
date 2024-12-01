import React from 'react';
import Postre1 from '../Image/P1.jpeg';
import Postre3 from '../Image/P3.jpeg';
import Postre4 from '../Image/P4.jpeg';
import Postre5 from '../Image/P5.jpeg';
import Postre6 from '../Image/P6.jpeg';
import Postre7 from '../Image/P7.jpeg';
import Postre8 from '../Image/P8.jpeg';


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
              alt="Postre de Tomate"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Tomate de árbol</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre dulce y fresco de tomate de árbol, con notas ácidas y dulces, ideal para cualquier ocasión.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img
              src={Postre3}
              className="card-img-top"
              alt="Postre de Mango"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Mango</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre refrescante de mango, dulce y suave, ideal para ocasiones cálidas.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img
              src={Postre4}
              className="card-img-top"
              alt="Postre de Mora"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Mora</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre refrescante de mora, con un sabor agridulce y textura suave.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img
              src={Postre5}
              className="card-img-top"
              alt="Postre de Milo"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Milo</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre cremoso de Milo, con un sabor único de chocolate y malta.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img
              src={Postre6}
              className="card-img-top"
              alt="Postre de Oreo"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Oreo</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre cremoso con capas de galleta Oreo y crema, ideal para los fanáticos de este sabor.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img
              src={Postre7}
              className="card-img-top"
              alt="Postre de Tres Leches"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Tres Leches</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre clásico, esponjoso y dulce, bañado en tres leches para un sabor irresistible.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <img
              src={Postre8}
              className="card-img-top"
              alt="Postre de Cereza"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Cereza</h5>
              <div className="flex-grow-1 d-flex flex-column">
                <p className="card-text">
                  Postre dulce y refrescante de cereza, con un toque ligeramente ácido.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary fs-4">7.000 COP</span>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
