import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Visitthe2024() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit cieTrade at the 2024 Plastics Recycling Conference</h1>
                    <h2 className="text-red-600 py-2">January 31, 2024 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/01/Plastics-conference-2024-website-2.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3 pb-5">Join us for the 2024 <a href="https://www.plasticsrecycling.com/overview" className="hover:text-gray-700 text-red-600">Plastics Recycling Conference</a> at The Gaylord Texan Resort and Convention Center March 25th-27th, where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to manage and control all aspects of your plastics recycling business from scale receiving, price management, and inventory control to shipping, settlements, reporting and more. Stop by <b>Booth #921</b> and learn how cieTrade’s cloud software can help your business streamline processes, reduce costs and maximize margins.</p>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/01/IMG_7892-1-1536x1152.jpg.webp" className="w-2/3" /></center>
                </div>
            </Container>
        </div>
    );
};

export default Visitthe2024;