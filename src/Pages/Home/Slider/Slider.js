import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {
    return (
        <div className="slider-container">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/1dyJT0k/image-copy.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/R699KGc/KTM-RC16-Brad-Binder.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bPy2yYf/stageimage.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/GkCjhpp/stageimagewithcountd.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/DgFzzSw/stageimage-177982127.jpg"
                        alt="Fiveth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/DWNkPcD/image.jpg"
                        alt="Sixth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;