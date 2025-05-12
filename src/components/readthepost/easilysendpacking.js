import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';

function Easilysendpacking() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Easily Send Packing Lists and Container Photos to Your Customers</h1>
                    <h2 className="text-red-600 py-2">September 21, 2023  / <a href={'/Productupdate'} className="hover:text-gray-700">Product Update</a></h2>
                    <p className="text-gray-500 text-lg py-3">The new Booking Notification Portal allows users to generate an email with a secure link that can be sent directly to your export receiver, providing instant access to all of their shipping notifications from a web page. This solution makes it easier for your customers to retrieve their packing list report and download container photos while saving you time and eliminating the need to send these attachments manually.</p>
                    <p className="text-gray-500 text-lg py-3">The link can be generated and emailed directly from the Booking or Export Shipping Worksheet in cieTrade. Once they’ve accessed the web portal, your customers can download a ZIP file with all container photos and generate a PDF version of the packing list with the click of a button.</p>
                    <p className="text-gray-500 text-lg py-3">The Booking Notification Portal is now available for both desktop and cloud software.</p>
                    <p className="text-gray-500 text-lg py-3">To learn more about the New Booking Notification Portal, contact our team or call us at 203.323.0074.</p>
                    <YouTube videoId="HEW35fgpsj4" opts={{ width: 1200, height: 600}} className="py-3" />
                </div>
            </Container>
        </div>
    );
};

export default Easilysendpacking;