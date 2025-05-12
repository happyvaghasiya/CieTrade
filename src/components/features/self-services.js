import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from "react";
import Northstar from '../../assets/img/northstar-recycling.png';
import Portalshipment from '../../assets/img/portal-shipments.png';
import Environmental from '../../assets/img/environmental.png';
import Ciedispatchtwophones from '../../assets/img/ciedtwophones1.png.webp';
import Ciedispatch from '../../assets/img/cieportal-two-phones.png.webp';
import YouTube from 'react-youtube';

function SelfServices() {
    const [activeIndex, setActiveIndex] = useState(null);
    const YouTubeEmbed = ({ videoId }) => (
        <div className="w-full h-[330px] ">
            <YouTube videoId={videoId} className="w-full h-full" opts={{ width: '100%', height: '100%' }} />
        </div>
    );
    const faqs = [
        {
            question: "Can the portal be custom branded for my company?",
            answer: "Yes, ciePortal can be custom branded with your business logo and made easily accessible from your company website’s home page. ",
        },
        {
            question: "Does the data automatically sync from my cieTrade account?",
            answer: "Yes, since ciePortal is fully integrated with your cieTrade account, your data is automatically synced.",
        },
        {
            question: "Can customers make service requests through the portal?",
            answer: "Yes, customers have the ability to request types of service, for specific locations and equipment, as well as the time and day they’d like the service to occur. This information will be directed to your cieTrade system in real-time, allowing your customer service team to quickly and easily keep up with demand.",
        },
        {
            question: "Can customers make payments through the portal?",
            answer: "ciePortal allows clients to include a live link to their chosen payment gateway, providing their portal users with a quick and easy way to pay their open invoices.",
        },
    ];


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/05/Mask-Group-30.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-5xl text-white font-bold leading-tight">Self-Service Portal</h1>
                    <h1 className="text-lg text-white py-3 leading-tight">Empower your customers and vendors with a 24/7 digital support center</h1>
                    <div className='my-3'>
                        <a href={'/Bself'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3 font-bold text-tight ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>

            <Container className='ps-0'>
                <Row className='py-20'>
                    <Col lg={6}>
                        <YouTubeEmbed videoId="lq8selkqAtE"/>
                    </Col>
                    <Col lg={6} className='px-4'>
                        <h6 className='text-3xl font-bold py-4'>Reduce call volume, decrease operating costs & improve customer service</h6>
                        <h6 className='text-gray-600 text-lg'>ciePortal is a single service web portal that integrates seamlessly with your cieTrade system. It provides your customers with secure and immediate access to their service, payments, pricing information and more from anywhere. It helps save time and adds value to your relationship with your customers and recycling partners, while minimizing requests to your back office.</h6>
                    </Col>
                </Row>
            </Container>

            <div className='bg-zinc-800 text-center py-5'>
                <i class="fa-solid fa-quote-left text-white bg-red-600 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 lh-tight lg:px-80'>We have partnered with cieTrade for over 10 years as an early adopter of their software. The introduction of their integrated web portal has proven critical in meeting the needs of our trading partners and has far surpassed our expectations.</h6>
                <h6 className='text-white text-xl py-1'>Noah Goodman, President</h6>
                <center><img src={Northstar} alt="Norkol" className='h-10/12 img-fluid pt-4' /></center>
            </div>
            <Container>
                <Row className='py-12'>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-4xl font-bold py-4'>Provide Real-time Information</h6>
                        <h6 className='text-xl text-gray-500 '>On-demand access to shipment details, service requests, charges and payments, and summary reporting is available for customers and suppliers directly from your website. You can drill down to view important details, including load details, statuses, contract terms and more. You can also export to Microsoft Excel for further analysis.</h6>
                    </Col>
                    <Col lg={6}><img src={Portalshipment} className=''></img></Col>
                </Row>
            </Container>
            <Container>
                <Row className='py-12'>
                    <Col lg={6}><img src={Environmental} className='pt-24'></img></Col>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-4xl font-bold py-4'>
                            Help Measure Recycling Efforts</h6>
                        <h6 className='text-xl text-gray-500 '>Your trading and recycling partners can instantly evaluate their recycling efforts with a material distribution chart that displays recycled tonnage with user definable categories. Information is gathered tightd on actual tonnage and distribution of recycled commodities. It also features an Environmental Impact Statement tightd on EPA guidelines that makes it easier for customers to measure the performance of their recycling program.</h6>
                    </Col>
                </Row>
            </Container>

            <div className='bg-zinc-800'>
                <Container >
                    <Row className='py-5'>
                        <h1 className='text-5xl font-bold lh-tight pb-3 text-center text-white'>Key Features </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Provides your customers with fast, real-time access to information on their recycling program</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Reduces calls and emails to your back-office while improving customer service</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Helps meet service level demands for new business </h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Adds value to existing customer relationships</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Fully customizable and branded for your business</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Provides reports for individual locations or in consolidation </h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Can be viewed from workstations, smartphones or tablets </h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Exports directly to Microsoft Excel </h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Secure user access is easily administered from your cieTrade system</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Easily accessible from your company website’s home page </h6></div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='py-24'>
                <h1 className='text-4xl font-bold lh-tight text-center py-2'>Want to see a full list of features? </h1>
                <h1 className='text-4xl font-bold lh-tight text-center text-red-600 '>Download our self-service portal brochure</h1>
                <div className='py-5'> <center><a href={'/Bself'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-tight ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </Container>
            <Container>
                <Row className='py-10'>
                    <h1 className='text-4xl font-bold lh-tight text-center py-4'>Additional Tools</h1>
                    <Col lg={6} className='py-3' >
                        <center><img src={Ciedispatchtwophones} className='w-2/3'></img></center>
                        <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                        <h1 className='font-bold  text-3xl py-2'>cieMobile</h1>
                        <h6 className='text-gray-600 text-lg py-3'>cieTrade’s mobile reporting app provides sales reps and managers with real-time access to cieTrade account information and key management reports from the road or anywhere else.</h6>
                        <div className='py-3'> <a href={'/Ciemobile'} className="text-red-600 font-bold text-tight py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                    </Col>
                    <Col lg={6} className='py-3'>
                        <center><img src={Ciedispatch} className='w-2/3'></img></center>
                        <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                        <h1 className='font-bold  text-3xl py-2'>cieDispatch</h1>
                        <h6 className='text-gray-600 text-lg py-3'>cieDispatch lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos.</h6>
                        <div className='py-3'> <a href={'/Ciedispatch'} className="text-red-600 font-bold lg:text-tight md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-light py-5 '>
                <div className="max-w-5xl mx-auto p-4 ">
                    <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`border-1 transition-all duration-300 py-2 ${activeIndex === index ? "border-red-600 shadow-sm" : "border-gray-300"}`} >
                                <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleFAQ(index)} >
                                    <h2 className={`font-bold text-lg transition-all duration-300 text-xl ${activeIndex === index ? "text-red-600" : "text-gray-500"}`}> {faq.question}</h2>
                                    <span className={`text-3xl font-bold transition-all duration-300 ${activeIndex === index ? "text-red-600" : "text-gray-500"}`} >
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="p-4 text-gray-600 text-lg ">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>

    );
};

export default SelfServices;