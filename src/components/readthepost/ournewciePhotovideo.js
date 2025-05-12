import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';

function OurnewciePhotovideo() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl leading-tight">Our New ciePhoto Video</h1>
                    <h2 className="text-red-600 py-2">June 19, 2020  / <a href={'/Videos'} className="hover:text-gray-700">Video</a></h2>
                    <p className="text-gray-500 py-3">The ciePhoto app for cieTrade lets you easily send photos of export loads to customers & documents quality issues on receiving loads.  It works by automatically connecting images with corresponding loads, eliminating the time consuming task of manually organizing and preparing images. </p>
                    <YouTube videoId="Iyzbu3Vj6b0" opts={{ width: 1200, height: 300}} className="py-3" />
                    <p className="text-gray-600 py-3">To learn more, contact us at <a href="" className="text-red-600 hover:text-gray-700 underline">inquire@cietrade.com</a></p>
                </div>
            </Container>
        </div>
    );
};

export default OurnewciePhotovideo;