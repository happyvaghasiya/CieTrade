import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';

function Checkouttradeshow() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl leading-tight">Check Out Our New Tradeshow Video</h1>
                    <h2 className="text-red-600 py-2">October 9, 2023  / <a href={'/Videos'} className="hover:text-gray-700">Video</a></h2>
                    <p className="text-gray-500 text-lg py-3">cieTrade’s modern cloud software provides everything you need to manage and grow your recycling operation from scale receiving, barcode scanning, inventory control and material processing to trading and export, shipping & invoicing, web portals and more. Check out our new tradeshow video and learn how cieTrade can help you  maximize business performance.</p>
                    <YouTube videoId="eYbAkFCEwwU" opts={{ width: 1200, height: 300}} className="py-3" />
                </div>
            </Container>
        </div>
    );
};

export default Checkouttradeshow;