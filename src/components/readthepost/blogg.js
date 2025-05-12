import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hands from '../../assets/img/hands.png.webp';
import Untitled5 from '../../assets/img/Untitled5.png.webp';
import Laptopontable from '../../assets/img/laptop-on-table.png';
import Traintrack from '../../assets/img/train-tracks.png.webp';
import Redefining from '../../assets/img/redefining-waste-management.png.webp';
import Worker from '../../assets/img/worker.png.webp';

function Blogg() {
    const data = {
        details: [
            { img: Hands, title: "Accounting Integration Options with cieTrade", date: " june 13,2023 /", description: "The success of a company relies heavily on their business management software. However, these companies are depending on a single software for all of their needs, when really, using a complimentary system that communicates as a well-established API is the best answer. Recyclers and traders alike have special workflow needs that can be met with […]", border: "" },
            { img: Untitled5, title: "The Hidden Cost of Running your Recycling Business with Spreadsheets", date: "August 8, 2017 /", description: "Everyone starts off building their company with spreadsheets since they’re a cheap, easy solution to track orders, shipments, inventory, etc. The problem is that as volumes increase and operations expand, many businesses become married to using them long after they’ve served their purpose. Sometimes this happens because of cost concerns, the belief that change will", border: "" },
            { img: Laptopontable, title: "10 Things to Look For With Commodity Brokerage Software", date: "june 30, 2017 /", description: "There aren’t many software solutions in the marketplace specifically adapted for commodity trading or scrap brokerage. Of the few available, many are basically just add-ons, built on existing waste hauling or accounting software that can have serious limitations and constraints, making them difficult to work with or adapt to your operation. Before choosing software for", border: "" },
            { img: Traintrack, title: "Keeping your Business Software Project from Getting Derailed", date: "May 25, 2017 /", description: "Observations on what to avoid when implementing new business (ERP) software. Having successfully installed many cieTrade business software solutions over the years I’m often asked by new clients what they can do to help ensure a smooth transition from their old system and minimize potential problems. While the answer partly depends on their particular circumstances and", border: "" },
            { img: Redefining, title: "Redefining Waste Management", date: "May 9, 2017 /", description: "Why the right software is critical to success in the waste management business. People that come to the waste management business with a background in waste hauling or recycling, often think of it as a service business. So it’s no wonder that choosing business software is often a second-thought. However, with the vast amount of data", border: "" },
            { img: Worker, title: "What to Ask Before Purchasing Recycling Software", date: "July 5, 2016 /", description: "David Haber, President of cieTrade Systems Inc., reviews several worthwhile questions for recyclers to ask when they shop for software. Faced with competitive markets, volume and quality demands and new shipping regulations, recyclers of recovered fiber and other materials increasingly appreciate the value of operating with specialized business software. These systems are designed to handle", border: "" },
        ],
    };
    return (
        <div className="bg-light">
            <div><h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1></div>
            <Container>
                <h1 className="text-4xl font-light leading-tight pt-20">Blog</h1>
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
                                    <h1 className="text-red-600 py-2">{item.date}<a href={'/Blogg'} className=" hover:text-gray-700">Blog</a> </h1>
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

export default Blogg;
