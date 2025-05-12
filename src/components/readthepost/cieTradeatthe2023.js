import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Cietradeatthe2023() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">cieTrade at the 2023 ISRI New England Chapter Golf Outing</h1>
                    <h2 className="text-red-600 py-2">August 28, 2023 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <p className="text-gray-500 text-lg py-3">Our Team was excited to sponsor and attend the 2023 ReMA New England Chapter Golf Outing at the Lake of Isles Golf Course at Foxwoods Casino. It was a great day on the course and networking with other industry professionals.</p>
                    <div className="lg:flex md:flex-none sm:flex-none">
                        <center className="col-lg-6 col-md-12 col-sm-12"><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/Golf_-1.png.webp" className="w-full h-96 p-3" /></center>
                        <center className="col-lg-6 col-md-12 col-sm-12"><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/Untitled-1.png.webp" className="w-full h-96 p-3" /></center>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cietradeatthe2023;