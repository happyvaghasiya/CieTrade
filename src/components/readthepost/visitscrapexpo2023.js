import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Visitscrapexpo2023() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Visit Us at Scrap Expo 2023 in Louisville, KY</h1>
                    <h2 className="text-red-600 py-2">September 5, 2023 / <a href={'/Pastevent'} className="hover:text-gray-700">Past Events</a></h2>
                    <p className="text-gray-500 text-lg py-3 pb-5">cieTrade is excited to be exhibiting at the 2023 Scrap Expo Event in Lousville, KY. Stop by <b>Booth #309</b> at the Kentucky Exposition Center, September 12-13th, where we will be showcasing the latest developments to our cloud software for scrap metal trading and recycling.</p>
                </div>
            </Container>
        </div>
    );
};

export default Visitscrapexpo2023;