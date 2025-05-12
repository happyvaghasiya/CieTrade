import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function CieTradefeaturedinglobal() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl leading-tight font-bold">cieTrade Featured in Global Recycling Magazine</h1>
                    <h2 className="text-red-600 py-2">June 29, 2021 / <a href={'/Newss'} className="hover:text-gray-700">News</a></h2>
                    <p className="text-gray-500 text-lg py-3">In a recent interview with Global Recycling Magazine, cieTrade’s Product Manager, Emily Ott, discusses the platform and its efficiencies for trading and recycling companies. Read the <a href="https://global-recycling.info/archives/5498" className="hover:text-gray-700 text-red-600">full interview</a> to learn more.</p>
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2021/06/global.png.webp" className="w-1/2 h-96 pb-3" />
                </div>
            </Container>
        </div>
    );
};

export default CieTradefeaturedinglobal;