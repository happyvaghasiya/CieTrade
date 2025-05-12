import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function Videos() {
    const data = {
        details: [
            { img:"https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/cieLocation-website-picture.png.webp", title: "Check Out Our New cieLocation Video", date: "June 7, 2024  /", description: "cieLocation is cieTrade’s Inventory Scanning Mobile App.  It helps your warehouse staff check and edit inventory, confirm stock availability and streamline routine stock and cycle counts. Click here to learn more about our Inventory Scanning App cieLocation. ",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/04/dash-test-web.png.webp", title: "Check Out Our New Customer Reporting Portal Video.", date: "April 26, 2024 /", description: "ciePortal is cieTrade’s web based online reporting solution for your trading and recycling partners. It helps save time and reduce costs by giving your customers on-demand access to information about their recycling program from anywhere, while minimizing phone calls and emails to your back office.https://www.youtube.com/watch?v=lq8selkqAtE",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Untitled-design-5.png.webp", title: "Check Out Our New Tradeshow Video", date: "October 9, 2023 /", description: "cieTrade’s modern cloud software provides everything you need to manage and grow your recycling operation from scale receiving, barcode scanning, inventory control and material processing to trading and export, shipping & invoicing, web portals and more. Check out our new tradeshow video and learn how cieTrade can help you  maximize business performance.",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2020/06/ciephoto-website-image-1.png.webp", title: "Our New ciePhoto Video", date: "June 19, 2020  /", description: "The ciePhoto app for cieTrade lets you easily send photos of export loads to customers & documents quality issues on receiving loads.  It works by automatically connecting images with corresponding loads, eliminating the time consuming task of manually organizing and preparing images.  To learn more contact us at inquire@cietrade.com",border:"" },
        ],
    };
    return (
        <div className="bg-light">
            <div><h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1></div>
            <Container>
            <h1 className="text-4xl font-light leading-tight pt-20">Videos</h1>
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
                                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                                    <h1 className="text-red-600 py-2">{item.date}<a href={'/Blogg'} className=" hover:text-gray-700"> Videos</a> </h1>
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

export default Videos;
