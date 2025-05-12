import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import YouTube from 'react-youtube';
import Casestudy from '../../assets/img/casestudypng.webp';
import Pasharecycling from '../../assets/img/pasharecycling.png';
import Commercialplasticscase from '../../assets/img/CommercialPlasticscase.png';

function Ourclients() {
    const YouTubeEmbed = ({ videoId }) => (
        <div className="w-full h-[330px] ">
            <YouTube videoId={videoId} className="w-full h-full" opts={{ width: '100%', height: '100%' }} />
        </div>
    );

    const data = {
        Client: [
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/integrity-recycling-logo-black.png.webp", description: "For nearly two decades, cieTrade has allowed our company to grow and adapt in every aspect of the recycling and waste industry. No other industry software comes close to cieTrade's support and capabilities.", title: "Ralph Giordano, President" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/CNA-Metals-logo-1.png.webp", description: "cieTrade continues to amaze us. The software and integrated portal have really opened up opportunities to grow our business and differentiate us among our competitors while their support team has provided a level of service we have never experienced before.", title: "Hari Agrawal, CEO" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/select-trading-logo.png.webp", description: "With cieTrade, everything from trade profitability to shipping statistics are instantly available, keeping us on target day in and out. cieTrade has become an invaluable part of our operation and a critical tool to help us grow our business.", title: "Eddie San Giacomo, CEO" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/Untitled-design-1.png.webp", description: "With cieTrade, everything from trade profitability to shipping statistics are instantly available, keeping us on target day in and out. cieTrade has become an invaluable part of our operation and a critical tool to help us grow our business.", title: "Jesse Roberts, VP" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/Untitled-design-2.png.webp", description: "cieTrade has proved to be invaluable in helping us grow and stay competitive, dramatically lowering our operating costs, providing critical data for decision making, and improving service for customers and suppliers.", title: "Jeffrey Levit, President & CEO" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/Untitled-design-3.png.webp", description: "cieTrade has allowed us to completely organize our business, helping us improve organization of data, equipment tracking, service management and providing critical insight into profitability.", title: "Tyler Yaldo, Founder" },
        ],
    }
    return (
        <div>
            <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://i.ytimg.com/vi/oBY6wR2FAqk/maxresdefault.jpg)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-32 pt-52">
                    <h1 className="text-6xl text-white font-bold leading-tight">Our Clients</h1>
                    <h1 className="text-xl text-white py-3 leading-tight lg:px-72">cieTrade has a diverse worldwide customer base that’s transacted billions in goods and shipped hundreds of thousands of containers on our software. Our clients include many of the leading trading houses, scrap exporters, and recycling plants. cieTrade’s flexible design has also attracted waste brokers and national accounts consolidators looking to avoid using spreadsheets or expensive custom systems.</h1>
                </div>
            </div>

            <Container>
                <Row className='g-0 py-16'>
                    <Col lg={6}>
                        <YouTubeEmbed videoId="mwtsCFbxXa4" />
                    </Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>SUCCESS STORY</h6>
                        <h6 className='text-3xl font-bold py-3'>Wasteology</h6>
                        <h6 className='text-gray-600 text-lg'>Learn how Wasteology, a waste and recycling services broker, eliminated double-entry, streamlined dispatch management and improved their billing process with cieTrade’s industry-specific software, tailored to meet evolving needs as their operation scales.</h6>
                        <div className='pt-10'>
                            <a href='https://youtu.be/mwtsCFbxXa4' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>

                <Row className='g-0 py-16'>
                    <Col lg={6}>
                        <YouTubeEmbed videoId="mehip29GhNI" />
                    </Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>SUCCESS STORY</h6>
                        <h6 className='text-3xl font-bold py-3'>AP&J Recycling</h6>
                        <h6 className='text-gray-600 text-lg'>As a rapidly growing plastics recycling business, AP&J Recycling needed an industry-specific solution to be able to manage their operation. Learn how cieTrade helped eliminate manual spreadsheets, improve inventory tracking and increase accuracy of COGS.</h6>
                        <div className='pt-10'>
                            <a href='https://youtu.be/mehip29GhNI' className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-16'>
                    <Col lg={6}><img src={Casestudy} className='pe-4 w-full h-80'></img></Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>CASE STUDY</h6>
                        <h6 className='text-3xl font-bold py-3'>iSustain Recycling</h6>
                        <h6 className='text-gray-600 text-lg'>Prior to using cieTrade, iSustain ran their company solely on manual spreadsheets; however, their team struggled to keep up as the business grew and expanded. Without a proper software system in place, challenges quickly began to arise, prompting iSustain to connect with cieTrade as a solution.</h6>
                        <div className='pt-10'>
                            <a href={'/ISustain'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Read The Case Study<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-16'>
                    <Col lg={6}><img src={Pasharecycling} className='pe-4 w-full h-80'></img></Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>CASE STUDY</h6>
                        <h6 className='text-3xl font-bold py-3'>Pasha Recycling</h6>
                        <h6 className='text-gray-600 text-lg'>In their continued commitment to embrace new technology and introduce leading-edge techniques to speed up and refine their operations, Pasha Recycling sought a comprehensive software that could provide complete traceability throughout their supply chain.</h6>
                        <div className='pt-10'>
                            <a href={'/Pasha'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Read The Case Study<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-16'>
                    <Col lg={6}><img src={Commercialplasticscase} className='pe-4 w-full h-80'></img></Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>CASE STUDY</h6>
                        <h6 className='text-3xl font-bold py-3'>Commercial Plastics Recycling Inc.</h6>
                        <h6 className='text-gray-600 text-lg'>Before cieTrade, Commercial Plastics developed its own custom Microsoft Access database to track inventory and manage operations. However, their team soon realized the system wasn’t as efficient as they’d hoped and it’d become difficult and time-consuming to maintain a home-grown program</h6>
                        <div className='pt-10'>
                            <a href={'/Commercial'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Read The Case Study<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-16'>
                    <Col lg={6}>
                        <YouTubeEmbed videoId="oBY6wR2FAqk" />
                    </Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>SUCCESS STORY</h6>
                        <h6 className='text-3xl font-bold py-3'>Canusa Hershman</h6>
                        <h6 className='text-gray-600 text-lg'>Lack of real-time integration with accounting software proved to be problematic for Canusa Hershman. cieTrade helped by handling transactions faster, allowing them to grow from a domestic to an international trader.</h6>
                        <div className='pt-10'>
                            <a href="https://youtu.be/oBY6wR2FAqk" className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 py-16'>
                    <Col lg={6}>
                        <YouTubeEmbed videoId="yxcsJQlRxAk" />
                    </Col>
                    <Col lg={6} className='lg:ps-10'>
                        <h6 className='pt-3 font-bold text-xl text-red-600'>SUCCESS STORY</h6>
                        <h6 className='text-3xl font-bold py-3'>The Paper Tigers</h6>
                        <h6 className='text-gray-600 text-lg'>Having started with a custom solution, The Paper Tigers quickly began to realize the redundancies and loss of productivity. Learn how cieTrade helped grow their business while reducing operational costs by 35-40%.</h6>
                        <div className='py-10'>
                            <a href="https://youtu.be/yxcsJQlRxAk" className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold">Watch Success Story<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='bg-light py-5'>
                <Container className='lg:px-20 md:px-0 sm:px-0'>
                    <h1 className='text-4xl text-center font-bold'>What Our Clients Are Saying</h1>
                    <Row>
                        {data.Client.map((item, index) => (
                            <Col lg={4} md={6} sm={12} key={index} className='pt-5'>
                                <img src={item.icon} className='w-full bg-light' />
                                <h1 className='text-xl text-center py-3 font-semibold'>"{item.description}"</h1>
                                <h1 className='text-gray-500 text-center'>{item.title}</h1>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Ourclients;