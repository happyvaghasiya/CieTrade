import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function VisitPRSE2024() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit cieTrade at PRSE 2024 in Amsterdam, NL</h1>
                    <h2 className="text-red-600 py-2">April 26, 2024 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/PRSE-Banner-1.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3 pt-5">cieTrade is excited to attend the Plastics Recycling Show Europe taking place this year in Amsterdam, NL. Stop by our Booth #A45 June 19th-20th where we will be demonstrating the latest developments of our Cloud Software for Scrap Trading and Recycling.</p>
                    <p className="text-gray-500 text-lg py-3 pb-5">If you’re interested in learning how cieTrade can help your business, <a href="https://calendly.com/cie-trade/cietrade-at-prse-2024" className="text-red-600 hover:text-gray-700">book a meeting</a> with us at the show.</p>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/PRSE-2024-2-1461x1536.png.webp" className="w-2/3" /></center>
                </div>
            </Container>
        </div>
    );
};

export default VisitPRSE2024;