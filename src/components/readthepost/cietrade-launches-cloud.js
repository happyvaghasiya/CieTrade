import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from 'react-youtube';


function Cietradelaunchescloud() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <h1 className="text-5xl  leading-tight">cieTrade Launches Cloud Software</h1>
                    <h2 className="text-red-600 py-2">August 17, 2016 / <a href={'/Pressreleases'} className="hover:text-gray-700"> Press Releases</a></h2>
                    <p className="text-gray-500 text-lg py-3"><span className="text-gray-600 font-bold">Stamford, CT,  August 16, 2016  —</span> cieTrade Systems, a global provider of business software for scrap traders, paper-stock brokers, and recyclers, has introduced a new B2B cloud software solution for small to medium-sized enterprises. cieTrade.net offers an alternative to costly desktop hardware, giving users the flexibility to work from anywhere and increase productivity by avoiding clunky spreadsheets and tedious workarounds. </p>
                    <p className="text-gray-500 text-lg py-3">“Studies have shown that the overall cost of cloud software is <a href="https://www.netsuite.com/portal/pdf/wp-hurwitztco-study-dynamics.pdf" className="text-red-600 hover:text-gray-700 underline">  55% less</a> than comparable on-premise applications. cieTrade.net was developed as a cost effective way to help commodity traders by offering a specialized solution that meets the dynamic demands of their industry.” says David Haber, CEO at cieTrade Systems Inc.  “cieTrade.net is designed around a “buy/sell” ticket concept with the sales and cost components of each shipment on a single form, with projected margins, making it exceptionally intuitive.” </p>
                    <p className="text-gray-500 text-lg py-3">Their new platform includes a number of key features for scrap and paper-stock traders, such as built-in tools for logistics tracking, automated shipping and billing documentation, email integration with customizable message templates, and support for attaching third-party documents and photos with each shipment. Haber claims the most valuable benefit is the gross profit reports, critical for effective decision making and managing the contribution of sales reps for commissions. It also offers real-time accounting integration to eliminate double-entry. </p>
                    <p className="text-gray-500 text-lg py-3">iSustain, a plastics and paper recycler says, “cieTrade.net and its support team has been a game-changer in helping us manage and grow our business. The improvement in accuracy, efficiency, customer service, and the professional image it’s helped us project has been beyond our expectations. The dashboard feature has really helped us drive profitability results in real time.”</p>
                    <p className="text-gray-500 text-lg py-3">As an all-in-one business management solution, cieTrade.net provides business owners an affordable way to increase efficiency and maximize profits, while avoiding the limitations and redundancies of spreadsheets or accounting workarounds. </p>
                    <p className="text-gray-500 text-lg py-3">Pricing starts at $375/month for a three user license. To learn more, or to register for a free trial, visit<a href={'/'} className="text-red-600 hA modified version of this article was recently published in Recycling Today Global Edition.over:text-gray-700 underline"> Cietrade.net</a>.</p>
                    <YouTube videoId="xyRMB8J-Whc" opts={{ width: 1200, height: 300}} className="py-3" />
                </div>
            </Container>
        </div>
    );
};

export default  Cietradelaunchescloud; 