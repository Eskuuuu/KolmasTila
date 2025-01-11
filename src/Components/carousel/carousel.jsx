import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carouselshow() {

    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/vasen.svg" alt="esittelykuva1" />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/keskel.svg" alt="esittelykuva2" />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/oikea.svg" alt="esittelykuva3" />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>


    )


}

export default Carouselshow

