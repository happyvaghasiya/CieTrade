import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hands from '../../assets/img/hands.png.webp';
import Untitled5 from '../../assets/img/Untitled5.png.webp';
import Laptopontable from '../../assets/img/laptop-on-table.png';
import Traintrack from '../../assets/img/train-tracks.png.webp';
import Redefining from '../../assets/img/redefining-waste-management.png.webp';
import Worker from '../../assets/img/worker.png.webp';

function Productupdate() {
    const data = {
        details: [
            { img:"https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/03/ciedispatch-website.png.webp", title: "Updated cieTrade Mobile Dispatch App", date: "March 8, 2024  /", description: "cieDispatch helps drivers track service requests, capture activity and provide instant status updates from anywhere. Our dispatch app allows your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos. Information is instantly updated in your existing cieTrade account, saving time and making it […]",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/booking-portal-image-news-events.png.webp", title: "Easily Send Packing Lists and Container Photos to Your Customers", date: "September 21, 2023 /", description: "The new Booking Notification Portal allows users to generate an email with a secure link that can be sent directly to your export receiver, providing instant access to all of their shipping notifications from a web page. This solution makes it easier for your customers to retrieve their packing list report and download container photos",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img2.jpg.webp", title: "Updated cieMobile App for Android and Apple Devices", date: "January 21, 2022 /", description: "cieTrade’s mobile reporting app, cieMobile, has been reintroduced, now with cross platform support for both Apple and Android devices. cieMobile provides on-demand access to vital data and records from your cieTrade platform including financial reports, tickets, shipments, account information and more. Please note that the previous version of cieMobile will soon be removed from the",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img6.jpg.webp", title: "cieTrade’s New Service Contract Module", date: "April 2, 2019 /", description: "cieTrade’s new productivity tool allows you to efficiently manage service contracts with waste haulers or other third-parties while eliminating spreadsheet workarounds.  The new Service Contract Module lets you set up one or more service agreements between a hauler and any service location. These contracts can be retrieved based on account, site, provider, contract date or expiration.  Email",border:"" },
        ],
    };
    return (
        <div className="bg-light">
            <div><h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1></div>
            <Container>
            <h1 className="text-4xl font-light leading-tight pt-20">Product Updates</h1>
            </Container>
            <Container>
                <Row className="py-5">
                    {data.details.map((item, index) => (
                        <Col lg={12} className='py-5' key={index}>
                            <Row>
                                <Col lg={6}>
                                    <img src={item.img} alt="" className='w-full' />
                                </Col>
                                <Col lg={6}>
                                    <h1 className="text-xl font-semibold">{item.title}</h1>
                                    <h1 className="text-red-600 py-2">{item.date}<a href={'/Blogg'} className=" hover:text-gray-700">Product Updates</a> </h1>
                                    <h1 className="text-lg text-gray-500 py-3">{item.description}</h1>
                                    <div className="pt-3 "><a href="#" className="text-white bg-red-600 hover:bg-gray-900 p-3 ">Read More <i class="fa-solid fa-chevron-right text-xs"></i><i class="fa-solid fa-chevron-right text-xs"></i></a></div>
                                </Col>
                            <div className="border-b border-gray-300 py-5">{item.border}</div>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Productupdate;
