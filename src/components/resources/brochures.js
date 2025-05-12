import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Brochures() {

    const data = {
        brochures: [
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/agri-new-1024x683.png.webp", title: "Agricultural Commodities", id: "Bagricultural" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/commodity-new-1024x683.png.webp", title: "Commodity Brokerage", id: "Bcommodity" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/iStock_000002343884_Full-1024x683.jpg.webp", title: "International Trade", id: "Binternational" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/shutterstock_2007074588-1-1024x684.jpg.webp", title: "Paper Merchants", id: "Bmerchant" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/plastics-new-1024x683.png.webp", title: "Plastics Recycling", id: "Brecycling" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/pulp-paper-new-1024x683.png.webp", title: "Pulp and Paper Trading", id: "Bscrap" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/recycling-plant-new-1024x683.png.webp", title: "Recycling Plants", id: "Bplant" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/dreamstime_m_18381774-1-1024x683.jpg.webp", title: "Scrap Metal Recycling", id: "Btrading" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/waste-dumpsters-large-1-1024x683.png.webp", title: "Waste Brokerage", id: "Bbrokerage" },
        ],
    };

    return (
        <div className='bg-light'>
            <div className="relative bg-cover bg-center h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/2024-06-25_11h23_20.png.webp')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative text-center pt-56 pb-44">
                    <h1 className="text-6xl text-white font-bold pb-2">Brochures</h1>
                    <p className="text-xl text-white">Download our brochures to learn more about our software solutions</p>
                </div>
            </div>
            <Container className='py-5'>
                <Row>
                    {data.brochures.map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className='py-3'>
                            <img src={item.img} className="w-full h-auto" />
                            <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                            <a href={item.id}><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 mt-4 leading-tight">Download Brochure <i class="fa-solid fa-arrow-right ps-2"></i></button></a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Brochures;