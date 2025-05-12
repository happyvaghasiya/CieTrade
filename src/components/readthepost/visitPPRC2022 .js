import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function VisitPPRC2022() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit cieTrade at PPRC 2022 in Chicago, IL</h1>
                    <h2 className="text-red-600 py-2">October 19, 2022 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/10/Untitled-10.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3">cieTrade is excited to sponsor and exhibit at the 2022 Paper and Plastics Recycling Conference in Chicago, IL. Stop by Booth #52 October 19th-20th where we will be showcasing the latest developments to our Cloud Software for Trading and Recycling.</p>
                    <div className="lg:flex md:flex-none sm:flex-none">
                        <center className="col-lg-6 col-md-12 col-sm-12"><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/Untitled-7.png.webp" className="w-full h-96 p-3" /></center>
                        <center className="col-lg-6 col-md-12 col-sm-12"><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/Untitled-6.png.webp" className="w-full h-96 p-3" /></center>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default VisitPPRC2022;