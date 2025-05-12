import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import Team from '../../assets/img/team.png';
import Story from '../../assets/img/story.png.webp';
import Clientlogo from '../../assets/img/clientlogo.png';
import Office from '../../assets/img/office.png';
import Ourpartnerslogo from '../../assets/img/Ourpartnerslogo.png';


function Aboutus() {
    return (
        <div>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/2J3A8856-1-scaled.jpg.webp')` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">About Us</h1>
                    <h1 className="text-xl text-white py-3 leading-tight lg:px-72">We provide specialized software to help trading and recycling companies maximize performance and drive business success.</h1>
                </div>
            </div>

            <Container className='bg-light'>
                <Row className='py-12'>
                    <Col lg={6}><img src={Team}></img></Col>
                    <Col lg={6} className='content-center py-3'>
                        <h6 className='text-4xl font-bold py-3'>What We Do</h6>
                        <h6 className='text-lg text-gray-500'>cieTrade is a global provider of commodity trading and recycling software. We offer business management and inventory solutions specifically for international trading houses, pulp and paper brokers, and for commercial recycling plants. From the start, we have been focused on understanding the needs and the evolving challenges faced by our clients and provide leading edge software solutions that would help them work smarter, operate more effectively, and overcome the demands and regulatory challenges in todays’ difficult markets.</h6>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='py-12'>
                    <Col lg={6} className='content-center py-3'>
                        <h6 className='text-4xl font-bold py-3'>Our Story</h6>
                        <h6 className='text-xl text-gray-500'>The inspiration for cieTrade was born out of frustration with trying to manage a rapidly growing trading & recycling business that started out (like many) trying to save money by tracking everything on paper tickets and spreadsheets, only to find out how expensive they really are when costly errors occur and you can’t satisfy stake holders and banks.</h6>
                        <div className='py-5'> <a href={'/Ourstory'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>

                    </Col>
                    <Col lg={6}><img src={Story}></img></Col>
                </Row>
            </Container>

            <Container className='bg-light'>
                <Row className='py-12'>
                    <Col lg={6}><img src={Clientlogo}></img></Col>
                    <Col lg={6} className='content-center py-3'>
                        <h6 className='text-4xl font-bold py-3'>Our Clients</h6>
                        <h6 className='text-lg text-gray-500'>cieTrade has a diverse worldwide customer base that’s transacted billions in goods and shipped hundreds of thousands of containers on our software. Our clients include many of the leading international trading houses, scrap exporters, and recycling plants. cieTrade’s flexible design has also attracted waste brokers and national accounts consolidators looking to avoid using spreadsheets or expensive custom systems.</h6>
                        <div className='py-5'> <a href={'/Ourclients'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='py-12'>
                    <Col lg={6} className='content-center py-3'>
                        <h6 className='text-4xl font-bold py-3'>Training & Support</h6>
                        <h6 className='text-xl text-gray-500'>Our commitment to our customers’ success starts with a support team rooted in both the recycling business and the forest products industry, providing in-depth knowledge of operations and finance, and best practices to help our clients maximize their software investment. With the closely connected industries we serve, we understand the importance of working in partnership with our clients to solve problems and meet challenges since their success is tied to our own.</h6>
                        <div className='py-5'> <a href={'/Trainning'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                    <Col lg={6}><img src={Office}></img></Col>
                </Row>
            </Container>

            <Container className='bg-light'>
                <Row className='pt-20'>
                    <Col lg={6}><img src={Ourpartnerslogo}></img></Col>
                    <Col lg={6} className='content-center py-3'>
                        <h6 className='text-4xl font-bold py-3'>Our Partners</h6>
                        <h6 className='text-lg text-gray-500'>Customer service is at the core of what we do and our partner relationships help us provide important capabilities that are key to delivering complete solutions for our clients. With this in mind we have chosen selected associates that share our focus on customer success and that have a demonstrated track record for delivering consistent results.</h6>
                        <div className='py-5'> <a href={'/Ourpartners'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Learn More<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutus;