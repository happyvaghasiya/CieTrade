import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';

function Checkoutlocation() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Check Out Our New cieLocation Video</h1>
                    <h2 className="text-red-600 py-2">June 7, 2024  / <a href={'/Videos'} className="hover:text-gray-700">Video</a></h2>
                    <p className="text-gray-500 text-lg py-3">cieLocation is cieTrade’s Inventory Scanning Mobile App.  It helps your warehouse staff check and edit inventory, confirm stock availability and streamline routine stock and cycle counts.</p>
                    <p className="text-gray-500 text-lg py-3">Click here to learn more about our Inventory Scanning App <a href={'/Cielocationn'} className="text-red-600 hover:text-gray-700">cieLocation</a>.</p>
                    <YouTube videoId="jK6Tft7rzfM" opts={{ width: 1200, height: 600}} className="py-3" />
                </div>
            </Container>
        </div>
    );
};

export default Checkoutlocation;