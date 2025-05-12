import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hands from '../../assets/img/hands.png.webp';
import Untitled5 from '../../assets/img/Untitled5.png.webp';
import Laptopontable from '../../assets/img/laptop-on-table.png';
import Traintrack from '../../assets/img/train-tracks.png.webp';
import Redefining from '../../assets/img/redefining-waste-management.png.webp';
import Worker from '../../assets/img/worker.png.webp';

function Blog() {
    const data = {
        details: [
            { img: Hands, title: "Blog", label: "Accounting Integration Options with cieTrade", date: "June 13, 2023", description: "The success of a company relies heavily on their business management software. However, these companies are depending on a single software for all of their needs, when really, using a complimentary system that communicates as ..." },
            { img: Untitled5, title: "Press Releases", label: "The Hidden Cost of Running your Recycling Business with Spreadsheets", date: "August 8, 2017", description: "Everyone starts off building their company with spreadsheets since they’re a cheap, easy solution to track orders, shipments, inventory, etc. The problem is that as volumes increase and operations expand, many businesses become married to ..." },
            { img: Laptopontable, title: "Blog", label: "10 Things to Look For With Commodity Brokerage Software", date: "June 30, 2017", description: "There aren’t many software solutions in the marketplace specifically adapted for commodity trading or scrap brokerage. Of the few available, many are basically just add-ons, built on existing waste hauling or accounting software that can ..." },
            { img: Traintrack, title: "Blog", label: "Keeping your Business Software Project from Getting Derailed", date: "May 25, 2017", description: "Observations on what to avoid when implementing new business (ERP) software. Having successfully installed many cieTrade business software solutions over the years I’m often asked by new clients what they can do to help ensure ..." },
            { img: Redefining, title: "Blog", label: "Redefining Waste Management", date: "May 9, 2017", description: "Why the right software is critical to success in the waste management business. People that come to the waste management business with a background in waste hauling or recycling, often think of it as a ..." },
            { img: Worker, title: "Blog", label: "What to Ask Before Purchasing Recycling Software", date: "July 5, 2016", description: "David Haber, President of cieTrade Systems Inc., reviews several worthwhile questions for recyclers to ask when they shop for software. Faced with competitive markets, volume and quality demands and new shipping regulations, recyclers of recovered ..." },
        ],
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
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
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/shutterstock_1916506628-scaled.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">Blog</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Read about industry insights, best practices, latest releases and more</h1>
                </div>
            </div>
            <Container>
                <Row className="py-5">
                    {currentItems.map((item, index) => (
                        <Col lg={12} className='py-5' key={index}>
                            <Row>
                                <Col lg={6}>
                                    <img src={item.img} alt="" className='w-full' />
                                </Col>
                                <Col lg={6}>
                                    <h1 className="text-xl pt-2 font-bold text-red-600">{item.title}</h1>
                                    <h1 className="text-4xl py-2 font-bold lh-sm">{item.label}</h1>
                                    <h1 className="text-gray-400"><i className="fa-solid fa-calendar pe-2"></i>{item.date}</h1>
                                    <h1 className="text-lg text-gray-500 py-2">{item.description}</h1>
                                    <div className="pt-4"><a href={'/Readthepost'} className="text-white bg-red-600 hover:bg-red-700 p-3 font-bold">Request Demo<i className="fa-solid fa-arrow-right ps-1 pt-1"></i></a></div>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>

                <div className="text-center border-none">
                    <Button
                        className="text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            variant={currentPage === i + 1 ? "" : "transparent border-0"}
                            onClick={() => setCurrentPage(i + 1)}
                            className="mx-2 text-red-600 hover:text-gray-500 border-0 text-lg font-semibold"
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button
                        className="text-red-600 hover:text-gray-500 text-lg font-semibold"
                        variant="transparent border-0"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Blog;
