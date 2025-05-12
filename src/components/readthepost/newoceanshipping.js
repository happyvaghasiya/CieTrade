import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Newoceanshipping() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl leading-tight font-bold">New Ocean Shipping Automation with Infor-Nexus</h1>
                    <h2 className="text-red-600 py-2">December 12, 2020 / <a href={'/Pressreleases'} className="hover:text-gray-700">Press Releases</a></h2>
                    <p className="text-gray-500 text-lg py-3">Infor-Nexus is one of the leading supply chain platforms for global trade and includes most of the world’s ocean carriers as active participants on their network. With cieTrade’s integration to Infor-Nexus, clients can directly submit Shipping Instructions electronically to steamship lines and receive confirmations within cieTrade. This premium service will continue to be provided to cieTrade clients at no cost whatsoever. With this new partnership, cieTrade will also introduce support to submit Ocean Booking and Booking Confirmations as well as re-introduce e-VGM support in the coming months. We will also be providing an enhanced customer service level to help resolve submission issues on behalf of our clients.</p>
                    <p className="text-gray-500 text-lg py-3">For more information on our partnership with Infor-Nexus, <a href="https://www.infor.com/resources/infor-nexus-ocean-services" className="hover:text-gray-700 text-red-600 underline">visit their website</a> or contact the cieTrade support team.</p>
                </div>
            </Container>
        </div>
    );
};

export default Newoceanshipping;