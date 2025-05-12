import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CieTradefeatured() {
    const NextArrow = ({ onClick }) => (
        <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 text-3xl"
            onClick={onClick}
        >
            ➡
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50 text-3xl"
            onClick={onClick}
        >
            ⬅
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const data = {
        slider: [
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h48_53.png.webp' },
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h49_13.png.webp' },
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h49_30.png.webp' },
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h49_47.png.webp' },
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h50_03.png.webp' },
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h50_20.png.webp' },
            { img: 'https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-24_09h50_42.png.webp' },
        ],
    };
    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">cieTrade featured in Metals Recycling Magazine</h1>
                    <h2 className="text-red-600 py-2">June 24, 2024  / <a href={'/Newss'} className="hover:text-gray-700">News</a></h2>
                    <p className="text-gray-500 text-lg py-3">In the <a href="https://www.flipsnack.com/BD897F77C6F/metalsrecycling-may-june-2024/full-view.html" className="text-red-600 hover:text-gray-700">latest May/June 2024 issue</a> of MetalsRecycling Magazine, cieTrade’s Marketing Manager, Pamela Prado, shared valuable insight on the advantages of using a specialized business management software to streamline scrap recycling operations.</p>
                    <Slider {...settings}>
                        {data.slider.map((item, index) => (
                            <Col lg={12} md={12} sm={12} key={index}>
                                <center><img src={item.img} alt="logo" className='w-3/5' /></center>
                            </Col>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default CieTradefeatured;