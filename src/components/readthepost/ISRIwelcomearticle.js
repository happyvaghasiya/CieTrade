import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ISRIwelcomearticle() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img1.jpg.webp" className="w-full h-96 pb-3" />
                    <h1 className="text-5xl leading-tight">ISRI Welcome Article on cieTrade</h1>
                    <h2 className="text-red-600 py-2">January 31, 2022 / <a href={'/Newss'} className="hover:text-gray-700">News</a></h2>
                    <p className="text-gray-500 py-3">In a recent article introducing cieTrade to the <a href="https://www.isri.org/" className="hover:text-gray-700 text-red-600 underline">Institute of Scrap Recycling Industries</a> (ISRI), cieTrade President David Haber discusses the company’s background, latest developments, and more. Read ISRI’s <a href="https://www.scrap.org/isri-welcomes-new-member-cietrade/" className="hover:text-gray-700 text-red-600 underline">full welcome article</a> on cieTrade to learn more.</p>
                </div>
            </Container>
        </div>
    );
};

export default ISRIwelcomearticle;