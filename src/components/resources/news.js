import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Plastic from '../../assets/img/Plastics.png';
import Ciemobile2 from '../../assets/img/cieMobile2.png';
import Booking from '../../assets/img/Booking.png';
import Pprc from '../../assets/img/PPRC.png';
import Glof from '../../assets/img/golf.webp';
import Artical from '../../assets/img/article.png';
import Cielocationweb from '../../assets/img/cieLocationwebsite.png';
import Dash from '../../assets/img/dash.png';
import Prse from '../../assets/img/PRSE.png';
import Ciedispatchweb from '../../assets/img/ciedispatchwebsite.png';
import Isri from '../../assets/img/ISRI.png';
import Plasticrecycling from '../../assets/img/plasticsrecycling.png';
import Freightview from '../../assets/img/Freightview.png';
import Untitled from '../../assets/img/Untitled.png';
import Bookingportal from '../../assets/img/bookingportal.png';
import Scrap from '../../assets/img/scrap.png';
import Isrigolf from '../../assets/img/ISRIGolf.png';
import Isri2023 from '../../assets/img/ISRI2023.png';
import Pprc2022 from '../../assets/img/PPRC2022.png';
import Post1 from '../../assets/img/post.jpg';
import Post2 from '../../assets/img/post2.jpg';
import Post3 from '../../assets/img/post3.jpg';

function News() {
    const data = {
        detail: [
            { img: Plastic, title: "Past Event", label: "Visit us at the Plastics Recycling World Expo 2024 in Cleveland, OH", date: "October 21, 2024", description: "Join us for the annual Plastics Recycling World Expo at the Huntington Convention Center where we will be showcasing our Modern Cloud Software for Plastics Trading & Recycling. Our platform is designed to manage and ..." },
            { img: Ciemobile2, title: "Press Releases", label: "cieTrade Launches Updated Mobile Reporting app, cieMobile", date: "October 9, 2024", description: "Updated cieMobile app helps recyclers and exporters be productive and work from anywhere. Norwalk, CT — October 9th — cieTrade Systems, Inc., a global leader in business management software for bulk commodity export trading and ..." },
            { img: Booking, title: "Press Releases", label: "cieTrade Launches an Automated Booking ETA Update Service for Logistics Management", date: "September 25, 2024", description: "New automated booking ETA update service makes logistics management more efficient for exporters. Norwalk, CT — September 25th — cieTrade Systems Inc., a leader in global business management software for bulk commodity export trading and ..." },
            { img: Pprc, title: "Past Events", label: "Visit cieTrade at PPRC 2024 in Chicago, IL", date: "September 11, 2024", description: "Join us for the annual Paper and Plastics Recycling Conference at the Hyatt Regency Chicago in Chicago, IL where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed ..." },
            { img: Glof, title: "Past Events", label: "cieTrade at the 2024 ReMA New England Chapter Golf Outing", date: "August 27, 2024", description: "Our Team was excited to sponsor and attend the 2024 ReMA New England Chapter Golf Outing at the Lake of Isles Golf Course at Foxwoods Casino. It was a great day on the course and ..." },
            { img: Artical, title: "News", label: "cieTrade featured in Metals Recycling Magazine", date: "June 24, 2024", description: "In the latest May/June 2024 issue of MetalsRecycling Magazine, cieTrade’s Marketing Manager, Pamela Prado, shared valuable insight on the advantages of using a specialized business management software to streamline scrap recycling operations..." },
            { img: Cielocationweb, title: "Videos", label: "Check Out Our New cieLocation Video", date: "June 7, 2024", description: "cieLocation is cieTrade’s Inventory Scanning Mobile App.  It helps your warehouse staff check and edit inventory, confirm stock availability and streamline routine stock and cycle counts. Click here to learn more about our Inventory Scanning ..." },
            { img: Dash, title: "Videos", label: "Check Out Our New Customer Reporting Portal Video", date: "April 26, 2024", description: "ciePortal is cieTrade’s web based online reporting solution for your trading and recycling partners. It helps save time and reduce costs by giving your customers on-demand access to information about their recycling program from anywhere, ..." },
            { img: Prse, title: "Past Events", label: "Visit cieTrade at PRSE 2024 in Amsterdam, NL", date: "April 26, 2024", description: "cieTrade is excited to attend the Plastics Recycling Show Europe taking place this year in Amsterdam, NL. Stop by our Booth #A45 June 19th-20th where we will be demonstrating the latest developments of our Cloud ..." },
            { img: Ciedispatchweb, title: "Product Updates", label: "Updated cieTrade Mobile Dispatch App", date: "March 8, 2024", description: "cieDispatch helps drivers track service requests, capture activity and provide instant status updates from anywhere. Our dispatch app allows your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, ..." },
            { img: Isri, title: "Past Events", label: "Visit cieTrade at ISRI 2024 in Las Vegas, NV", date: "January 31, 2024", description: "cieTrade is excited to once again attend the annual ISRI Convention and Exposition taking place this year in Las Vegas, NV. Stop by our Booth #2050 April 15th-17th where we will be demonstrating the latest ..." },
            { img: Plasticrecycling, title: "Past Events", label: "Visit cieTrade at the 2024 Plastics Recycling Conference", date: "January 31, 2024", description: "Join us for the 2024 Plastics Recycling Conference at The Gaylord Texan Resort and Convention Center March 25th-27th, where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed ..." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Plastics-Recycling-World-Expo-News-Events-Page.png.webp", title: "Past Events", label: "Visit Us at Plastics Recycling World Expo 2023 in Cleveland, OH", date: "October 25, 2023", description: "Join us for the Plastics Recycling World Expo 2023 at the Huntington Convention Center in Cleveland, OH where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to ..." },
            { img: Freightview, title: "Press Releases", label: "cieTrade Introduces Freight Booking Integration with Freightview", date: "October 18, 2023", description: "New integration partnership simplifies the freight tendering process and optimizes freight rates. Norwalk, Conn. – October 16, 2023 – cieTrade, a leading provider of business management software for commodity brokers, paper and recycling companies announces ..." },
            { img: Untitled, title: "Videos", label: "Check Out Our New Tradeshow Video", date: "October 9, 2023", description: "cieTrade’s modern cloud software provides everything you need to manage and grow your recycling operation from scale receiving, barcode scanning, inventory control and material processing to trading and export, shipping & invoicing, web portals and ..." },
            { img: Bookingportal, title: "Product Updates", label: "Easily Send Packing Lists and Container Photos", date: "September 21, 2023", description: "The new Booking Notification Portal allows users to generate an email with a secure link that can be sent directly to your export receiver, providing instant access to all of their shipping notifications from a ..." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/PPRC-web.png.webp", title: "Past Events", label: "Visit cieTrade at PPRC 2023 in Chicago, IL", date: "September 6, 2023", description: "Join us for the annual Paper and Plastics Recycling Conference at the Marriott Marquis in Chicago, IL where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to ..." },
            { img: Scrap, title: "Past Events", label: "Visit Us at Scrap Expo 2023 in Louisville, KY", date: "September 5, 2023", description: "cieTrade is excited to be exhibiting at the 2023 Scrap Expo Event in Lousville, KY. Stop by Booth #309 at the Kentucky Exposition Center, September 12-13th, where we will be showcasing the latest developments to ..." },
            { img: Isrigolf, title: "Past Events", label: "cieTrade at the 2023 ISRI New England Chapter Golf Outing", date: "August 28, 2023", description: "Our team was excited to sponsor and attend the 2023 ISRI New England Chapter Golf Outing at the Framingham Country Club. It was great seeing some familiar faces and networking with other industry professionals ..." },
            { img: Isri2023, title: "Past Events", label: "Visit cieTrade at ISRI 2023 in Nashville, TN", date: "March 31, 2023", description: "cieTrade is excited to once again attend the annual ISRI Convention and Exposition taking place this year in Nashville, TN. Stop by our Booth #2022 April 17th-20th where we will be demonstrating the latest developments ..." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/01/plastics-recycling-confrencer-website-image.png.webp", title: "Past Events", label: "Visit cieTrade at the 2023 Plastics Recycling Conference", date: "February 27, 2023", description: "cieTrade is excited to once again sponsor and exhibit at the 2023 Plastics Recycling Conference. Stop by Booth #414 at the Gaylord National Resort & Convention Center, March 6th-8th, where we will be demonstrating our ..." },
            { img: Pprc2022, title: "Past Events", label: "Visit cieTrade at PPRC 2022 in Chicago, IL", date: "October 19, 2022", description: "cieTrade is excited to sponsor and exhibit at the 2022 Paper and Plastics Recycling Conference in Chicago, IL. Stop by Booth #52 October 19th-20th where we will be showcasing the latest developments to our Cloud ..." },
            { img: Post1, title: "News", label: "ISRI Welcome Article on cieTrade", date: "January 31, 2022", description: "In a recent article introducing cieTrade to the Institute of Scrap Recycling Industries (ISRI), cieTrade President David Haber discusses the company’s background, latest developments, and more. Read ISRI’s full welcome article on cieTrade to learn ..." },
            { img: Post2, title: "Product Updates", label: "Updated cieMobile App", date: "January 21, 2022", description: "cieTrade’s mobile reporting app, cieMobile, has been reintroduced, now with cross platform support for both Apple and Android devices. cieMobile provides on-demand access to vital data and records from your cieTrade platform including financial reports, ..." },
            { img: Post3, title: "News", label: "Helping waste & recycling companies", date: "December 14, 2021", description: "In a recent article published by Recycling Today, Seth Goodman, CEO of Northstar Recycling, discusses how they use cieTrade’s software to measure their clients’ waste and recycling efforts and deliver extensive data reports that help ..." }
        ]
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(data.detail.length / itemsPerPage);

    // Get items for the current page
    const currentItems = data.detail.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/shutterstock_1281656011-scaled.jpg.webp)` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">News & Events</h1>
                    <h1 className="text-xl text-white py-2 leading-tight">Stay up to date on the latest happenings at cieTrade</h1>
                </div>
            </div>

            <Container>
                <Row>
                    {currentItems.map((item, index) => (
                        <Col lg={12} className="py-10" key={index}>
                            <Row>
                                <Col lg={6}>
                                    <img src={item.img} alt="" className="w-full" />
                                </Col>
                                <Col lg={6}>
                                    <h1 className="text-xl pt-2 font-bold text-red-600">{item.title}</h1>
                                    <h1 className="text-4xl py-2 font-bold lh-sm">{item.label}</h1>
                                    <h1 className="text-gray-400"><i className="fa-solid fa-calendar pe-2"></i>{item.date}</h1>
                                    <h1 className="text-lg text-gray-500 py-2">{item.description}</h1>
                                    <div className="pt-3"><a href={'/Readthepost'} className="text-white bg-red-600 hover:bg-red-700 p-3 font-bold">Request Demo<i className="fa-solid fa-arrow-right ps-1 pt-1"></i></a></div>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>

                <div className="text-center border-none ">
                    <Button className=" text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}>Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button 
                            key={i}
                            variant={currentPage === i + 1 ? "text-gray-500" : "text-red-600 hover:text-gray-500"}
                            onClick={() => setCurrentPage(i + 1)}
                            className="mx-1 text-red-600 hover:text-gray-500 border-0 text-lg font-semibold">{i + 1}
                        </Button>
                    ))}

                    <Button className=" text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}>Next
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default News;
