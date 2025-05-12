import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Solasvgm() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img17.jpg.webp" className="w-full h-96" />
                    <h1 className="text-5xl  leading-tight">SOLAS/VGM Requirements Increase Challenges for Scrap Exporters</h1>
                    <h2 className="text-red-600 py-2">October 21, 2024 / <a href={'/Pressreleases'} className="hover:text-gray-700">Press Releases</a></h2>
                    <p className="text-gray-500 text-lg py-3">As many exporters know, beginning July 1st, all ocean container shipments will be required to submit a verified gross mass (VGM) for each container, before it’s loaded on a vessel, under the new Safety of Life at Sea (SOLAS) Convention from the International Maritime Organization (IMO).  VGM is defined as the total weight of the container including the net weight of the cargo and the tare weight of the container itself. While there is still confusion regarding acceptable forms of submission, it is clear that failure to comply, or submit in a timely manner, can result in containers not being loaded onto a vessel or being rejected from  entering the port entirely.</p>
                    <p className="text-gray-500 text-lg py-3"> <a href={'/'} className="text-red-600 hover:text-gray-700 underline">CieTrade</a> has worked to help their recycling and export clients throughout the supply chain meet this challenge and avoid costly in-gate charges or rejections with new software features and integration methods to make compliance as easy and efficient as possible. In general, VGM certificates can be submitted by shippers using one of several methods: through the carrier’s website portal, via email message, electronically using EDI messaging, or through middleware platforms such as CargoSmart or INTTRA. cieTrade offers seamless support for several of these.</p>
                    <p className="text-gray-500 text-lg py-3">For clients already using <a href="https://www.inttra.com/" className="text-red-600 hover:text-gray-700 underline">INTTRA</a> at the Huntington Convention Center where we will be showcasing our Modern Cloud Software for Plastics Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control to shipping, settlements, reporting and more. Stop by Booth #R536 and learn how cieTrade’s cloud software can help your business streamline processes, reduce costs and maximize margins.</p>
                    <p className="text-gray-500 text-lg py-3">For recycling plants, scrap yards, and even brokers that need to supply container tare weights to export customers, cieTrade has introduced several improvements to make the pro</p>
                </div>
            </Container>
        </div>
    );
};

export default Solasvgm;