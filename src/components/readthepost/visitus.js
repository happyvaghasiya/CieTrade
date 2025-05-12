import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Visitus() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit us at the Plastics Recycling World Expo 2024 in Cleveland, OH</h1>
                    <h2 className="text-red-600 py-2">October 21, 2024 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/Plastics-Recycling-World-Expo.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3">Join us for the annual <a href="https://na.plasticsrecyclingworldexpo.com/" className="text-red-600 hover:text-gray-700">Plastics Recycling World Expo</a> at the Huntington Convention Center where we will be showcasing our Modern Cloud Software for Plastics Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control to shipping, settlements, reporting and more. Stop by Booth #R536 and learn how cieTrade’s cloud software can help your business streamline processes, reduce costs and maximize margins.</p>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/IMG_4425.jpg.webp" /></center>
                </div>
            </Container>
        </div>
    );
};

export default Visitus;