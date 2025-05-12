import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function Pastevent() {
    const data = {
        details: [
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Plastics-Recycling-World-Expo-News-Events-Page.png.webp", title: "October 21, 2024 / Past Events", label: "Visit us at the Plastics Recycling World Expo 2024 in Cleveland, OH", description: "Join us for the annual Plastics Recycling World Expo at the Huntington Convention Center where we will be showcasing our Modern Cloud Software for Plastics Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control to shipping, […]" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/PPRC-web.png.webp", title: "September 11, 2024 / Past Events", label: "Visit cieTrade at PPRC 2024 in Chicago, IL", description: "Join us for the annual Paper and Plastics Recycling Conference at the Hyatt Regency Chicago in Chicago, IL where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control" },
            { img: "https://www.cietrade.com/wp-content/uploads/2024/08/golf-post-website.webp", title: "August 27, 2024 / Past Events", label: "cieTrade at the 2024 ReMA New England Chapter Golf Outing", description: "Our Team was excited to sponsor and attend the 2024 ReMA New England Chapter Golf Outing at the Lake of Isles Golf Course at Foxwoods Casino. It was a great day on the course and networking with other industry professionals." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/PRSE-2024-1.png.webp", title: "April 26, 2024 / Past Events", label: "Visit cieTrade at PRSE 2024 in Amsterdam, NL", description: "cieTrade is excited to attend the Plastics Recycling Show Europe taking place this year in Amsterdam, NL. Stop by our Booth #A45 June 19th-20th where we will be demonstrating the latest developments of our Cloud Software for Scrap Trading and Recycling. If you’re interested in learning how cieTrade can help your business, book a meeting" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/01/ISRI-website-1.png.webp", title: "January 31, 2024 / Past Events", label: "Visit cieTrade at ISRI 2024 in Las Vegas, NV", description: "cieTrade is excited to once again attend the annual ISRI Convention and Exposition taking place this year in Las Vegas, NV. Stop by our Booth #2050 April 15th-17th where we will be demonstrating the latest developments of our Cloud Software for Scrap Trading and Recycling. " },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/01/plastics-recycling-confrencer-website-image.png.webp", title: "January 31, 2024 / Past Events", label: "Visit cieTrade at the 2024 Plastics Recycling Conference", description: "Join us for the 2024 Plastics Recycling Conference at The Gaylord Texan Resort and Convention Center March 25th-27th, where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to manage and control all aspects of your plastics recycling business from scale receiving, price management, and inventory control to shipping, settlements," },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Plastics-Recycling-World-Expo-News-Events-Page.png.webp", title: "October 25, 2023 / Past Events", label: "Visit Us at Plastics Recycling World Expo 2023 in Cleveland, OH", description: "Join us for the Plastics Recycling World Expo 2023 at the Huntington Convention Center in Cleveland, OH where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/PPRC-web.png.webp", title: "September 6, 2023 / Past Events", label: "Visit cieTrade at PPRC 2023 in Chicago, IL", description: "Join us for the annual Paper and Plastics Recycling Conference at the Marriott Marquis in Chicago, IL where we will be showcasing our Modern Cloud Software for Trading & Recycling. Our platform is designed to manage and control all aspects of your paper or plastics recycling business from scale receiving, price management, and inventory control to" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/09/scrap-expo-website-image.png.webp", title: "September 5, 2023 / Past Events", label: "Visit Us at Scrap Expo 2023 in Louisville, KY", description: "cieTrade is excited to be exhibiting at the 2023 Scrap Expo Event in Lousville, KY. Stop by Booth #309 at the Kentucky Exposition Center, September 12-13th, where we will be showcasing the latest developments to our cloud software for scrap metal trading and recycling." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/08/ISRI-Golf.png.webp", title: "August 28, 2023 / Past Events", label: "cieTrade at the 2023 ISRI New England Chapter Golf Outing", description: "Our team was excited to sponsor and attend the 2023 ISRI New England Chapter Golf Outing at the Framingham Country Club. It was great seeing some familiar faces and networking with other industry professionals.  " },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/03/ISRI-2023-1.png.webp", title: "March 31, 2023 / Past Events", label: "Visit cieTrade at ISRI 2023 in Nashville, TN", description: "cieTrade is excited to once again attend the annual ISRI Convention and Exposition taking place this year in Nashville, TN. Stop by our Booth #2022 April 17th-20th where we will be demonstrating the latest developments to our Cloud Software for Scrap Trading and Recycling." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/01/plastics-recycling-confrencer-website-image.png.webp", title: "February 27, 2023 / Past Events", label: "Visit cieTrade at the 2023 Plastics Recycling Conference", description: "cieTrade is excited to once again sponsor and exhibit at the 2023 Plastics Recycling Conference. Stop by Booth #414 at the Gaylord National Resort & Convention Center, March 6th-8th, where we will be demonstrating our Cloud Software for Plastics Trading & Recycling." },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/10/PPRC-2022.png.webp", title: "October 19, 2022 / Past Events", label: "Visit cieTrade at PPRC 2022 in Chicago, IL", description: "cieTrade is excited to sponsor and exhibit at the 2022 Paper and Plastics Recycling Conference in Chicago, IL. Stop by Booth #52 October 19th-20th where we will be showcasing the latest developments to our Cloud Software for Trading and Recycling.  " },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2016/10/plastics-2017-website-image.png.webp", title: "October 24, 2016 / Past Events", label: "cieTrade at the 2016 Paper and Plastic Recycling Conference", description: "Thanks to all of our current and prospective clients who stopped by our booth in Chicago last week! If you missed an opportunity to stop by and talk to us, send us an email at ContactUs@cieTrade.com or give us a call at (20)323-0074." },
        ],
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // Logic for items per page

    // Calculate the total number of pages needed for pagination
    const totalPages = Math.ceil(data.details.length / itemsPerPage);

    // Get the items that need to be displayed for the current page
    const currentItems = data.details.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handle Previous Page Button
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-light">
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <h1 className="text-4xl font-light px-20 pt-28">Past Events</h1>
            <Container className="lg:px-28 md:px-0 sm:px-0">
                <Row>
                    {currentItems.map((item, index) => (
                        <Col lg={12} className='py-10 py-20' key={index}>
                            <Row>
                                <Col lg={6}>
                                    <img src={item.img} alt="" className='w-full' />
                                </Col>
                                <Col lg={6}>
                                    <h1 className='text-2xl font-semibold lh-sm py-2'>{item.label}</h1>
                                    <h1 className='text-red-600 pt-1 pb-2'>{item.title}</h1>
                                    <h1 className='text-gray-500 py-2 leading-6'>{item.description}</h1>
                                    <div className="py-3">
                                        <a href={'/Readthepost'} className="text-white bg-red-600 hover:bg-red-700 py-2 px-3">Read More<i className="fa-solid fa-arrow-right ps-1 pt-1 "></i></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>

                <div className="text-center py-4">
                    <Button
                        className="text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}>Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            variant={currentPage === i + 1 ? "" : "transparent border-0"}
                            onClick={() => setCurrentPage(i + 1)}
                            className="mx-2 text-red-600 hover:text-gray-500 border-0 text-lg font-semibold">{i + 1}
                        </Button>
                    ))}
                    <Button
                        className="text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}>Next
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Pastevent;
