import { Row, Col, Container } from 'react-bootstrap';
import { useState } from "react";
import Appstore from '../../assets/img/appstore.png';
import Googleplay from '../../assets/img/googleplay.png';
import Ciemobilelarge from '../../assets/img/ciemobile-large.png';
import Ciedispatch from '../../assets/img/ciedispatch.png';
import Cietwophone from '../../assets/img/cieportal-two-phones.png.webp';
import Selfservice from '../../assets/img/self-service.png';
import Bale5 from '../../assets/img/mobile4.webp';

function Ciemobile() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Does cieMobile provide real-time information from my cieTrade account?",
            answer: "Yes, since cieMobile is fully integrated with your cieTrade account, your data is automatically synced and you can view real-time, up to date information and reporting directly from your account.",
        },
        {
            question: "What kind of information can I view in cieMobile?",
            answer: "cieMobile provides access to account specific information and reports such as contracts and orders, pricing, purchase and sales history, shipping activity, A/R and more.",
        },
        {
            question: "Can I restrict information by user?",
            answer: "Yes, cieMobile can restrict users to view only their own orders and transactions. Data is also further guarded with individual user logins and permissions managed directly from your cieTrade account.",
        },
        {
            question: "Is my business information stored on my phone?",
            answer: "No, cieMobile safeguards your business data and never stores business information on your mobile device.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const data = {
        Tool: [
            { img: Ciedispatch, head: "MOBILE APPS", title: "cieDispatch", p: "cieDispatch is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos.", id: "Ciedispatch" },
            { img: Cietwophone, head: "MOBILE APPS", title: "cieMobile", p: "cieTrade’s mobile reporting app provides sales reps and managers with real-time access to cieTrade account information and key management reports from the road or anywhere else.", id: "Ciemobile" },
        ],
    }
    return (
        <div>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/2022-08-04_10h16_35-e1659622939307.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-32 pt-52">
                    <h1 className="text-6xl text-white font-bold leading-tight">cieMobile</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Take cieTrade’s trading and recycling software to go</h1>
                    <div className='my-5'>
                        <a href={'/Bciemobile'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>
            <Container>
                <Row className='g-0 y-20 lg:px-10 md:px-10 sm:px-10'>
                    <Col lg={6}><img src={Ciemobilelarge} className='w-full py-5'></img></Col>
                    <Col lg={6} className='py-10'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Obtain instant access to cieTrade business data from the road or anywhere else.</h6>
                        <div className=' py-2'><h6 className='text-xl text-gray-500 '><span className='font-bold text-red-600'>cieMobile  </span> provides sales reps and managers with real-time access to cieTrade® account information and key management reports from the road or anywhere else. It is compatible with all versions of cieTrade and can be easily activated for any client’s system without any additional software or network configurations.</h6></div>
                        <div className='flex py-2'>
                            <a href='https://apps.apple.com/us/app/cielocation/id1314428136'> <img src={Appstore} className='w-60'></img></a>
                            <a href='https://play.google.com/store/apps/details?id=com.cietradesystems.cieLocation&hl=en_US&gl=US'><img src={Googleplay} className='w-60 '></img></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-zinc-800 text-center py-5'>
                <i class="fa-solid fa-quote-left text-white bg-red-500 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 lh-tight lg:px-80'>cieDispatch allows our drivers to instantly view their schedules and communicate important details about each pick-up to our back-office. It’s helped us create a seamless scheduling process and improve customer service to our accounts.</h6>
                <h6 className='text-white text-xl '>Mel Tamsiti, Director of Sales Enablement</h6>
                <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/highlander-logo-290-x-70-with-white.png.webp" alt="Norkol" className='img-fluid pt-2' /></center>
            </div>
            <Container>
                <Row>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/ciemobile-order-management-w-drop.png.webp"></img></Col>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>Manage your orders from anywhere</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Create, edit and delete purchase and sales orders directly from your mobile device.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>View order details including order date, payment terms, shipping terms, sales rep and more.</h6></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>Keep records updated and accurate</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>View account and contact details including locations, credit limits, notes and more.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Create and edit contact information directly from your mobile device.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/ciemobile-manage-contacts-w-drop.png.webp"></img></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/cieMobile-document-sharing.png.webp"></img></Col>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>Instantly share order documents</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Generate custom branded documents.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Send purchase and sales order documents directly from your mobile device.</h6></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>Obtain instant reports</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Get visibility into key business metrics directly from your mobile device.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>View sales and purchase orders, open receivables, open shipments and more.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/ciemobile-reports-w-drop.png.webp"></img></Col>
                </Row>
            </Container>
            <div className='bg-zinc-800'>
                <Container>
                    <Row className='py-5'>
                        <h1 className='text-4xl font-bold lh-tight text-center text-white pb-5'>Key Features </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '> Provides “real-time” up-to-the-moment information and reporting directly from your cieTrade system.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '> Includes a Dashboard feature and drill down reports on key business activity.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '> Access key reports such as A/R, Sales,Purchases, Tonnage shipped, and more.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '> Provides account specific information such as contracts & orders, pricing, purchase and sales history, shipping activity, and more.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '> Customer address book lets you make calls, send emails or get driving directions.</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '>Quickly find and retrieve any Worksheet or Scale Ticket in cieTrade right from your smart phone.Can be viewed from workstations, smartphones or tablets.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '>Supports reporting by department or in consolidation.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '>View scale tickets, shipments and brokerage trades with the same level of detail as in cieTrade.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '>Safeguards data with individual user logins and permissions managed directly from cieTrade.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-white font-semibold '>Never stores business information on your mobile device.</h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='py-24'>
                <h1 className='text-4xl font-bold lh-tight text-center py-2'>Want to see a full list of features? </h1>
                <h1 className='text-4xl font-bold lh-tight text-center text-red-600 '>Download our cieMobile brochure</h1>
                <div className='py-4'> <center><a href={'/Bciemobile'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </Container>
            <div className='bg-light'>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <h1 className='text-4xl font-bold lh-tight text-center py-4'>Additional Tools</h1>
                            <Col lg={6} >
                                <img src={Selfservice} className='w-full h-80 py-2' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>WEB APPLICATIONS</h1>
                                <h1 className='font-bold  text-3xl py-2'>Self-Service Portal</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s self-service portal gives supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.</h6>
                                <div className='py-3'> <a href={'/Selfservices'} className="text-red-600 font-bold py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={6}>
                                <img src={Bale5} className='w-full h-80' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieMobile</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s mobile app for Apple mobile devices provides sales reps and managers with real-time access to cieTrade® account information and key management</h6>
                                <div className='py-3'> <a href={'/Ciemobile'} className="text-red-600 font-bold">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>

                        </Row>

                    </Container>
                </div >
                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="text-3xl font-bold text-center mb-8">FAQ</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`border-1 transition-all duration-300 py-2 ${activeIndex === index ? "border-red-600 shadow-sm" : "border-gray-300"}`} >
                                <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleFAQ(index)} >
                                    <h2 className={`font-bold text-lg transition-all duration-300 text-xl ${activeIndex === index ? "text-red-600" : "text-gray-500"}`}> {faq.question}</h2>
                                    <span className={`text-3xl font-bold transition-all duration-300 ${activeIndex === index ? "text-red-600" : "text-gray-500"}`} >
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>{activeIndex === index && (
                                    <div className="p-4 text-gray-600 text-lg ">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Ciemobile;