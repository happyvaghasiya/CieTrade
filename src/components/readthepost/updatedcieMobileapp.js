import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function UpdatedcieMobileapp() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img2.jpg.webp" className="w-full h-96 pb-3" />
                    <h1 className="text-5xl leading-tight">Updated cieMobile App for Android and Apple Devices</h1>
                    <h2 className="text-red-600 py-2">January 21, 2022 / <a href={'/Productupdate'} className="hover:text-gray-700">Product Updates</a></h2>
                    <p className="text-gray-500 py-3">cieTrade’s mobile reporting app, cieMobile, has been reintroduced, now with cross platform support for both Apple and Android devices.</p>
                    <p className="text-gray-500 py-3">cieMobile provides on-demand access to vital data and records from your cieTrade platform including financial reports, tickets, shipments, account information and more. Please note that the previous version of cieMobile will soon be removed from the Apple App Store.  Current cieMobile users will be able to download this new version and login using their existing credentials. Clients interested in using cieMobile with Android devices will be able to get this new version from the Google Play store very shortly.</p>
                    <p className="text-gray-500 py-3">With this new technology platform, we will now be able to introduce significant new features and enhancements to cieMobile that have long been requested including support to create sales and purchase orders directly from your mobile device and much more.</p>
                    <p className="text-gray-500 py-3">To learn more about cieMobile, visit <a href={'/Ciemobile'} className="text-red-600 hover:text-gray-700 underline">Mobile CRM App | cieMobile</a> or contact the Support Team at 203.323.0074.</p>
                </div>
            </Container>
        </div>
    );
};

export default UpdatedcieMobileapp;