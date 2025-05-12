import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';


function Excitingchangeshappening() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl  leading-tight">Exciting Changes Happening at cieTrade</h1>
                    <h2 className="text-red-600 py-2">July 24, 2018 / <a href={'/Newss'} className="hover:text-gray-700">News</a></h2>
                    <YouTube videoId="v380s-Ak6Xs" opts={{ width: 1200, height: 300}} className="py-3" />
                    <p className="text-gray-500 text-lg py-3">As cieTrade continues to grow, we’re excited to announce that we’ve purchased a commercial property in “SoNo” South Norwalk where we will be moving our office. We look forward to settling into our new home during summer 2019.</p>
                </div>
            </Container>
        </div>
    );
};

export default  Excitingchangeshappening; 