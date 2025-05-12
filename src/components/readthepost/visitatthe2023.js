import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Visitatthe2023() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit cieTrade at the 2023 Plastics Recycling Conference</h1>
                    <h2 className="text-red-600 py-2">February 27, 2023 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/PRC-2023.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3 pb-5">cieTrade is excited to once again sponsor and exhibit at the 2023 Plastics Recycling Conference. Stop by Booth #414 at the Gaylord National Resort & Convention Center, March 6th-8th, where we will be demonstrating our Cloud Software for Plastics Trading & Recycling.  </p>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/Untitled-4-1-150x150.png.webp" className="w-1/2" /></center>
                </div>
            </Container>
        </div>
    );
};

export default Visitatthe2023;