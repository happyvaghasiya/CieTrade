import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Helpingwasterecycling() {

    return (
        <div>
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container>
                <div className="pt-20 lg:px-7 md:px-0 sm:px-0">
                    <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img3.jpg.webp" className="w-full h-96 pb-3" />
                    <h1 className="text-5xl leading-tight font-bold">Helping waste & recycling companies track diversion data and generate specialized reports.</h1>
                    <h2 className="text-red-600 py-2">December 14, 2021 / <a href={'/Newss'} className="hover:text-gray-700">News</a></h2>
                    <p className="text-gray-500 text-lg py-3">In a recent article published by <a href="https://www.recyclingtoday.com/article/esg-reporting-opportunities-wate-recycling-industry/" className="hover:text-gray-700 text-red-600">Recycling Today</a>, Seth Goodman, CEO of <a href="https://northstarrecycling.com/" className="hover:text-gray-700 text-red-600">Northstar Recycling</a>, discusses how they use cieTrade’s software to measure their clients’ waste and recycling efforts and deliver extensive data reports that help clients track ESG factors.</p>
                    <p className="text-gray-500 text-lg py-3">An increased demand for Environmental, Social, and Governance (ESG) Reporting in recent years correlates with a growing need for reliable data surrounding a company’s environmental and waste stream impact. Environmental metrics include energy and resource consumption, social metrics include employee and customer relations as well as gender and diversity inclusivity, while governance metrics include an organization’s internal dialogue and controls.</p>
                    <p className="text-gray-500 text-lg py-3">Northstar leverages cieTrade’s platform to aggregate data for “all the waste streams [their clients] are producing at all of their facilities” as well as “grades and weights of materials that have been diverted from the waste stream and the form that diversion took.” These reports are then uploaded to an ESG reporting platform to provide companies with a complete picture of their sustainability initiatives.</p>
                    <p className="text-gray-500 text-lg py-3">Read the <a href="https://www.recyclingtoday.com/article/esg-reporting-opportunities-wate-recycling-industry/" className="hover:text-gray-700 text-red-600">full article</a> to learn more.</p>
                </div>
            </Container>
        </div>
    );
};

export default Helpingwasterecycling;