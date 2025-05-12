import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';

function Checkoutcustomer() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Check Out Our New Customer Reporting Portal Video</h1>
                    <h2 className="text-red-600 py-2">April 26, 2024  / <a href={'/Videos'} className="hover:text-gray-700">Video</a></h2>
                    <p className="text-gray-500 text-lg py-3">ciePortal is cieTrade’s web based online reporting solution for your trading and recycling partners. It helps save time and reduce costs by giving your customers on-demand access to information about their recycling program from anywhere, while minimizing phone calls and emails to your back office.</p>
                    <YouTube videoId="lq8selkqAtE" opts={{ width: 1200, height: 600}} className="py-3" />
                </div>
            </Container>
        </div>
    );
};

export default Checkoutcustomer;