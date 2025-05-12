import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';


function Cietradeonlinecustomerreporting() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl  leading-tight">cieTrade’s Online Customer Reporting Portal</h1>
                    <h2 className="text-red-600 py-2">September 26, 2016 / <a href={'/Pressreleases'} className="hover:text-gray-700"> Press Releases</a></h2>
                    <p className="text-gray-900 text-xl py-3 font-semibold">Give your Recycling Partners instant access to their data with ciePortal. </p>
                    <p className="text-gray-500 text-lg py-3">ciePortal is a web based reporting portal that provides your recycling customers and supply chain partners with instant access to data and performance metrics on their recycling program.  Information is retrieved directly from your existing cieTrade system and presented in a professional web application that can be customized and branded to appear like your current web site. It includes vital reports such as shipping, pricing, and payment information that can be fully customized, helping to relieve requests to your back office and improve customer service. </p>
                    <YouTube videoId="oqM5_4jKcqM" opts={{ width: 1200, height: 300}} className="py-3" />
                    <p className="text-gray-500 text-lg py-3">Key features:</p>
                    <div className="ps-4">
                    <p className="text-gray-500 text-lg py-2">Helps you meet service level demands for new business </p>
                    <p className="text-gray-500 text-lg py-2">Provides reports for individual locations or in consolidation </p>
                    <p className="text-gray-500 text-lg py-2">Can be viewed from workstations, smartphones or tablets</p>
                    <p className="text-gray-500 text-lg py-2">Exports directly to Microsoft Excel</p>
                    <p className="text-gray-500 text-lg py-2">Secure user access is easily administered from your cieTrade system</p>
                    <p className="text-gray-500 text-lg py-2">Our online hosting can have you up and running in one day</p>
                    </div>
                    <p className="text-gray-500 text-lg py-3">To learn more about ciePortal, its features, and pricing, check out our <a href={'/SelfServices'} className="text-red-600 hA modified version of this article was recently published in Recycling Today Global Edition.over:text-gray-700 underline">Online Reporting </a> page, or email us at<a href={'/'} className="text-red-600 hA modified version of this article was recently published in Recycling Today Global Edition.over:text-gray-700 underline"> contactus@cieTrade.com.</a></p>
                </div>
            </Container>
        </div>
    );
};

export default  Cietradeonlinecustomerreporting; 