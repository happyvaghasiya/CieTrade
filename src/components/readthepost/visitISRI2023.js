import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function VisitISRI2023() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit cieTrade at ISRI 2023 in Nashville, TN</h1>
                    <h2 className="text-red-600 py-2">March 31, 2023 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/03/ISRI-web.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-2" />
                    <p className="text-gray-500 text-lg py-3 pb-5">cieTrade is excited to once again attend the annual ISRI Convention and Exposition taking place this year in Nashville, TN. Stop by our Booth #2022 April 17th-20th where we will be demonstrating the latest developments to our Cloud Software for Scrap Trading and Recycling.</p>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/03/Untitled-3-150x150.png.webp" className="w-1/2" /></center>
                </div>
            </Container>
        </div>
    );
};

export default VisitISRI2023;