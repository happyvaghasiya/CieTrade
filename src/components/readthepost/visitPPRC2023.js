import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function VisitPPRC2023() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit cieTrade at PPRC 2023 in Chicago, IL</h1>
                    <h2 className="text-red-600 py-2">September 6, 2023 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/PPRC-website-banner.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3 pb-5">Join us for the annual <a href="https://paperplasticsna.recyclingtodayevents.com/" className="hover:text-gray-700 text-red-600">Paper and Plastics Recycling Conference</a> at the Marriott Marquis in Chicago, IL where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control to shipping, settlements, reporting and more. Stop by Booth #10 and learn how cieTrade’s cloud software can help your business streamline processes, reduce costs and maximize margins.</p>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/02/PPRC-23-1-1024x913.png.webp" className="w-2/3" /></center>
                </div>
            </Container>
        </div>
    );
};

export default VisitPPRC2023;