import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Updatedmobile() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl font-bold leading-tight">Updated cieTrade Mobile Dispatch App</h1>
                    <h2 className="text-red-600 py-2">March 8, 2024 / <a href={'/Productupdate'} className="hover:text-gray-700">Product Updates</a></h2>
                    <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/03/WEBSITE-BANNER-DISPATCH.png.webp" className="lg:px-20 md:px-0 sm:px-0 py-3" /></center>
                    <p className="text-gray-500 text-lg py-3">cieDispatch helps drivers track service requests, capture activity and provide instant status updates from anywhere. Our dispatch app allows your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos. Information is instantly updated in your existing cieTrade account, saving time and making it easier to manage services while eliminating double-entry.</p>
                    <p className="text-gray-500 text-lg py-3">With the updated cieDispatch app we have introduced a few new features these include</p>
                    <ul className="ps-3 py-3">
                        <li className="text-gray-500 text-lg list-disc py-1">Ability to let drivers create their own service tickets directly from the app</li>
                        <li className="text-gray-500 text-lg list-disc py-1">Updated Job page layout  and information on service jobs have been expanded.</li>
                        <li className="text-gray-500 text-lg list-disc py-1">View addresses before launching maps.</li>
                        <li className="text-gray-500 text-lg list-disc py-1">Users can now record reasons for service fails.</li>
                    </ul>
                    <p className="text-gray-500 text-lg py-3">As before, you can also capture signatures, take or upload photos, pickup/left behind bale counts, write notes, receive instructions, and change status and more. All fully integrated with cieTrade’s Dispatch Job Module.</p>
                    <p className="text-gray-500 text-lg py-3">To learn more about cieDispatch, visit <a href={'/Ciedispatch'} className="text-red-600 hover:text-gray-700">cieDispatch</a> or contact the Support Team at 203.323.0074</p>
                </div>
            </Container>
        </div>
    );
};

export default Updatedmobile;