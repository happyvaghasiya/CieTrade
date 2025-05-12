import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';

function ClickBalebycieTrade() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl leading-tight">clickBale by cieTrade</h1>
                    <h2 className="text-red-600 py-2">July 1, 2020  / <a href={'/Pressreleases'} className="hover:text-gray-700">Press Releases</a></h2>
                    <p className="text-gray-500 py-3">clickBale is a productivity app for cieTrade that makes it easy for recycling plants to keep track of bale production and available baled inventory. It provides instant visibility on stock levels while eliminating paper tally sheets and other workarounds.</p>
                    <YouTube videoId="KTMgw-R8Bzo" opts={{ width: 1200, height: 300}} className="py-3" />
                    <p className="text-gray-600 py-3">To learn more, contact us at <a href="" className="text-red-600 hover:text-gray-700 underline font-bold">inquire@cietrade.com</a></p>
                </div>
            </Container>
        </div>
    );
};

export default ClickBalebycieTrade;