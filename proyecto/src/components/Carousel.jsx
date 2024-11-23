import React from 'react'
import Carousel1 from '../Image/carousel1.jpg'
import Carousel2 from '../Image/carousel2.jpg'
import Carousel3 from '../Image/carousel3.jpg'
import Carousel4 from '../Image/carousel4.jpg'
import Carousel5 from '../Image/carousel5.jpg'
import Carousel6 from '../Image/carousel6.jpg'
import Carousel7 from '../Image/carousel7.jpg'
const Carouel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {/* Imagen 1 */}
                    <div className="carousel-item active">
                        <img
                            src={Carousel1}
                            className="d-block w-100"
                            alt="Imagen 1"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Imagen 2 */}
                    <div className="carousel-item">
                        <img
                            src={Carousel2}
                            className="d-block w-100"
                            alt="Imagen 2"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Imagen 3 */}
                    <div className="carousel-item">
                        <img
                            src={Carousel3}
                            className="d-block w-100"
                            alt="Imagen 3"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Imagen 4 */}
                    <div className="carousel-item ">
                        <img
                            src={Carousel4}
                            className="d-block w-100"
                            alt="Imagen 4"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Imagen 5 */}
                    <div className="carousel-item ">
                        <img
                            src={Carousel5}
                            className="d-block w-100"
                            alt="Imagen 5"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Imagen 6 */}
                    <div className="carousel-item ">
                        <img
                            src={Carousel6}
                            className="d-block w-100"
                            alt="Imagen 6"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Imagen 7 */}
                    <div className="carousel-item">
                        <img
                            src={Carousel7}
                            className="d-block w-100"
                            alt="Imagen 7"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Carouel