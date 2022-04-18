import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3>Home Chef</h3>
                        <p>I take orders and make it at home.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3>Delicious</h3>
                        <p>No artificial spice has not used.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3>Hygenic</h3>
                        <p>
                            More hygenic. More clean. 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    };

export default Banner;