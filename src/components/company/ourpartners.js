import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import Infologo from '../../assets/img/infologo.png';
import Aeslogo from '../../assets/img/aeslogo.png';
import Opentextlogo from '../../assets/img/opentextlogo.png';
import Papersolvelogo from '../../assets/img/papersolve.png.webp';
import Rkllogo from '../../assets/img/rkllogo.png';
import Encorelogo from '../../assets/img/encorelogo.png';
import Intuitlogo from '../../assets/img/intuit.png.webp';
import Freightviewlogo from '../../assets/img/Freightviewlogo.png';
import Barcodeslogo from '../../assets/img/barcodeslogo.png';



function Ourpartners() {
    const data = {
        Logo:
            [
                { link: "https://www.infor.com/nordics/solutions/scm/infor-nexus", img: Infologo, name: 'Infor-Nexus', deatail: "INFOR-NEXUS provides industry-leading B2B ecommerce solutions for ocean shipping. More than 18 percent of global ocean container trade is planned, booked and managed via their platform. cieTrade is proud to offer Bill of Lading and shipping instruction automation to any INFOR-NEXUS carrier." },
                { link: "https://www.census.gov/foreign-trade/aes/aesdirect/transitiontoace.html", img: Aeslogo, name: 'AES Direct', deatail: "cieTrade is proud to offer seamless integration with AES direct, the US Census Bureau’s web-based system for filing Shipper’s Export Declarations via their Automated Export Systems (AES)." },
                { link: "https://www.opentext.com/products-and-solutions/services", img: Opentextlogo, name: 'Opentext', deatail: "Opentext provides comprehensive EDI services that help companies the efficiency, reliability and reach of their electronic supply chain while reducing costs. They are cieTrade’s exclusive EDI VAN partner offering a world-class transaction engine that leverages a fully redundant, secure global infrastructure.." },
                { link: "https://www.papersolve.com/aboutus/our-story/", img: Papersolvelogo, name: 'PaperSolve', deatail: "PaperSolve is an IT consulting and managed services provider that has worked closely and many of our clients for more than ten years. They provide cloud computing and related services such as online backup, disaster recovery, on-premise hardware solutions and more. PaperSolve’s years of experience with cieTrade allow them to provide a superior level of support for our clients." },
                { link: "https://www.rklesolutions.com/company/about-rkl/", img: Rkllogo, name: 'RKL eSolutions', deatail: "RKL eSolutions is an award-winning reseller and developer of Sage 500 ERP software. As one of the top resellers in the country, with over 20 years of experience, they have successfully delivered business solutions to more than 500 business of varying size and industry. RKL eSolutions has been cieTrade’s exclusive Sage Software partner for nearly ten years and provides clients with training services, technical support, software modification and financial reporting packages." },
                { link: "https://www.encorebusiness.com/company/about-us/", img: Encorelogo, name: 'Encore', deatail: "Encore is a leading provider of services for planning, developing and deploying business solutions on the Microsoft Dynamics platform. They are a Microsoft Gold Certified Partner in both ERP and CRM and support thousands of users worldwide. Encore offers training, consulting, and technical support to cieTrade’s clients integrated with Microsoft Dynamics G" },
                { link: "https://www.intuit.com/company/", img: Intuitlogo, name: 'Intuit', deatail: "Intuit is one of most recognized and successful business and personal finance software companies in the world offering a suite of well known products and SaaS services for small and medium sized businesses that include QuickBooks, TurboTax, Quicken, Mint.com and many others. As a member of Intuit’s Partner Platform, cieTrade leverages QuickBooks API to provide real-time transaction integration with QuickBooks Pro, Enterprise and Online editions." },
                { link: "https://www.freightview.com/", img: Freightviewlogo, name: 'Freightview', deatail: "Freightview is a leading cloud-based TMS platform that helps shippers streamline freight management functions including freight rating, electronic bookings, load tracking, reporting and more. After originating as an LTL rating tool, Freightview has evolved to support all modes of surface transportation and a wide range of shippers for domestic shipping." },
                { link: "https://www.encorebusiness.com/company/about-us/", img: Barcodeslogo, name: 'Barcodes Inc.', deatail: "Barcodes, Inc. provides barcodes, mobile computing, and radio-frequency identification solutions. The Company offers asset tracking, inventory, warehouse management, and barcode systems, as well as barcode scanning and printing hardware, mobile computing, and software." },
            ],
    };
    return (
        <div>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-52 lg:px-60">
                    <h1 className="text-6xl text-white font-bold leading-tight">Our Partners</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Customer service is at the core of what we do and our partner relationships help us provide important capabilities that are key to delivering complete solutions for our clients. With this in mind, we have chosen selected associates that share our focus on customer success and that have a demonstrated track record for delivering consistent results.</h1>
                </div>
            </div>

            <div className='bg-light'>
                <Container>
                    <Row className='py-4'>
                        {data.Logo.map((item, index) => (
                            <Col lg={4} key={index} className='py-5' >
                                <center><a><img src={item.img} className='w-full h-48'></img></a></center>
                                <h6 className=' font-bold  py-3 text-2xl'>{item.name}</h6>
                                <h6 className='text-lg text-gray-500'>{item.deatail}</h6>
                                <div className='py-3'> <a href={item.link} className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Ourpartners;