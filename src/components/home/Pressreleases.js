import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function Pressreleases() {
    const data = {
        details: [
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/cieMobile-2.0-updated.png.webp", title: "October 9, 2024 / Press Releases", label: "cieTrade Launches Updated Mobile Reporting app, cieMobile", description: "Updated cieMobile app helps recyclers and exporters be productive and work from anywhere. Norwalk, CT — October 9th — cieTrade Systems, Inc., a global leader in business management software for bulk commodity export trading and for the recycling industry, announces the launch of its updated mobile reporting application, cieMobile. In response to growing client demands, this […]" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/09/Booking-ETA-PR-WEB-IMAGE.png.webp", title: "September 25, 2024 / Press Releases", label: "cieTrade Launches an Automated Booking ETA Update Service for Logistics Management", description: "New automated booking ETA update service makes logistics management more efficient for exporters. Norwalk, CT — September 25th — cieTrade Systems Inc., a leader in global business management software for bulk commodity export trading and for the recycling industry, announces the upcoming launch of its Automated Booking ETA Update Service. This new feature is designed" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Freightview-Banner-2.png.webp", title: "October 18, 2023 / Press Releases", label: "cieTrade Introduces Freight Booking Integration with Freightview", description: "New integration partnership simplifies the freight tendering process and optimizes freight rates. Norwalk, Conn. – October 16, 2023 – cieTrade, a leading provider of business management software for commodity brokers, paper and recycling companies announces a new partnership with Freightview, a cloud-based TMS platform that helps shippers streamline freight management functions including freight rating, electronic bookings," },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2020/12/Infor-wesbsite-image.png.webp", title: "December 12, 2020 / Press Releases", label: "New Ocean Shipping Automation with Infor-Nexus", description: "Infor-Nexus is one of the leading supply chain platforms for global trade and includes most of the world’s ocean carriers as active participants on their network. With cieTrade’s integration to Infor-Nexus, clients can directly submit Shipping Instructions electronically to steamship lines and receive confirmations within cieTrade. This premium service will continue to be provided to" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2020/07/click-bale-website-image-1.png.webp", title: "July 1, 2020 / Press Releases", label: "clickBale by cieTrade", description: "clickBale is a productivity app for cieTrade that makes it easy for recycling plants to keep track of bale production and available baled inventory. It provides instant visibility on stock levels while eliminating paper tally sheets and other workarounds. To learn more, contact us at inquire@cietrade.com" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2019/07/international-website-image.png.webp", title: "July 31, 2019 / Press Releases", label: "cieTrade Offers New Cloud Software for Export Trading", description: "Stamford, CT,  July 31, 2019  — Effectively leveraging information technology has become critical to the success of paper, scrap and commodity exporters of all sizes, especially with today’s increasing customer demands, growing transaction volumes, logistical challenges, and exacting documentation requirements. cieTrade, a global provider of business software for international commodity trading and brokerage, provides comprehensive" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img11.jpg.webp", title: "February 1, 2017 / Press ReleasescieTrade Introduces Inventory & Converting Features to Cloud Software", label: "cieTrade Introduces Inventory & Converting Features to Cloud Software", description: "Stamford, CT, February 1st, 2017 — cieTrade Systems Inc., a global provider of business software for paper stock brokers, scrap dealers, and recyclers has announced the addition of Inventory Control, Material Processing, and Barcoding Scanning features to their recently launched cloud software.  Their new Inventory module offers a perfect solution for commodities such paper stock rolls/sheets or" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2016/08/cloud-software-launch-website.png.webp", title: "August 17, 2016 / Press Releases", label: "cieTrade Launches Cloud Software", description: "Stamford, CT,  August 16, 2016  — cieTrade Systems, a global provider of business software for scrap traders, paper-stock brokers, and recyclers, has introduced a new B2B cloud software solution for small to medium-sized enterprises. cieTrade.net offers an alternative to costly desktop hardware, giving users the flexibility to work from anywhere and increase productivity by avoiding" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img17.jpg.webp", title: "June 13, 2016 / Press Releases", label: "SOLAS/VGM Requirements Increase Challenges for Scrap Exporters", description: "As many exporters know, beginning July 1st, all ocean container shipments will be required to submit a verified gross mass (VGM) for each container, before it’s loaded on a vessel, under the new Safety of Life at Sea (SOLAS) Convention from the International Maritime Organization (IMO).  VGM is defined as the total weight of the […]" },
        ],
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
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
            <h1 className="text-4xl font-light px-20 pt-28">Press Releases</h1>
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

export default Pressreleases;
