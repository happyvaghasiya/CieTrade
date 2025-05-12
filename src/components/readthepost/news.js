import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function Newss() {
    const data = {
        details: [
            { img:"https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/06/article-feature-metalsrecycling.png.webp", title: "cieTrade featured in Metals Recycling Magazine", date: "June 24, 2024  /", description: "In the latest May/June 2024 issue of MetalsRecycling Magazine, cieTrade’s Marketing Manager, Pamela Prado, shared valuable insight on the advantages of using a specialized business management software to streamline scrap recycling operations. ",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img1.jpg.webp", title: "ISRI Welcome Article on cieTrade", date: "January 31, 2022 /", description: "In a recent article introducing cieTrade to the Institute of Scrap Recycling Industries (ISRI), cieTrade President David Haber discusses the company’s background, latest developments, and more. Read ISRI’s full welcome article on cieTrade to learn more.",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/post-img3.jpg.webp", title: "Helping waste & recycling companies track diversion data and generate specialized reports.", date: "December 14, 2021 /", description: "In a recent article published by Recycling Today, Seth Goodman, CEO of Northstar Recycling, discusses how they use cieTrade’s software to measure their clients’ waste and recycling efforts and deliver extensive data reports that help clients track ESG factors. An increased demand for Environmental, Social, and Governance (ESG) Reporting in recent years correlates with a",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2021/06/global.png.webp", title: "cieTrade Featured in Global Recycling Magazine", date: "June 29, 2021 /", description: "In a recent interview with Global Recycling Magazine, cieTrade’s Product Manager, Emily Ott, discusses the platform and its efficiencies for trading and recycling companies. Read the full interview to learn more..",border:"" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2018/07/sono-website-picture.png.webp", title: "Exciting Changes Happening at cieTrade", date: "July 24, 2018  /", description: "As cieTrade continues to grow, we’re excited to announce that we’ve purchased a commercial property in “SoNo” South Norwalk where we will be moving our office. We look forward to settling into our new home during summer 2019.",border:"" },

        ],
    };
    return (
        <div className="bg-light">
            <div><h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1></div>
            <Container>
            <h1 className="text-4xl font-light leading-tight pt-20">News</h1>
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
                                    <h1 className="text-red-600 py-2">{item.date}<a href={'/Blogg'} className=" hover:text-gray-700">News</a> </h1>
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

export default Newss;
