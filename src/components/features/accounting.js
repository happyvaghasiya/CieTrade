import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from "react";
import Logo1 from '../../assets/img/logo1.webp';
import Logo2 from '../../assets/img/logo2.webp';
import Logo3 from '../../assets/img/logo3.webp';
import Logo4 from '../../assets/img/logo4.png';
import Logo5 from '../../assets/img/logo5.png';
import Logo6 from '../../assets/img/logo6.png';
import Logo7 from '../../assets/img/logo7.png';
import Logo8 from '../../assets/img/logo8.png';
import Logo9 from '../../assets/img/logo9.png';


function Accounting() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What accounting systems does cieTrade integrate with?",
            answer: "cieTrade provides direct integration with popular accounting software including Intuit QuickBooks Online, Intuit QuickBooks Desktop, Xero, SAGE 50, SAGE 500, Sage Intact, NetSuite, Zoho Books and Microsoft Dynamics 365 Business Central. ",
        },
        {
            question: "What do I need in order to get my accounting integration set up?",
            answer: "In order to set up your accounting integration, you will need your accounting software login credentials and your Chart of Accounts. During the account set-up process, our onboarding team will provide a list of any additional items that are required along with information about how to map your Chart of Accounts in cieTrade.",
        },
        {
            question: "Can I link to more than one set of accounting books?",
            answer: "Yes, cieTrade gives you the flexibility to track more than one profit center or company on a single datatight. During the onboarding stage, you will be able to create multiple departments and select whether you would like to use our Multi-Department Accounting feature.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const data = {
        Logo: [
            { id: "https://quickbooks.intuit.com/ca/desktop/pro/", img: Logo1, deatail: "QuickBooks Desktop Pro is our most widely used accounting integration option. Transactions flow directly from cieTrade into QB company files using our internal Transaction Manager tool. Supports posting to multiple companies from one cieTrade datatight by allowing cieTrade departments to be mapped to different QB company files." },
            { id: "https://quickbooks.intuit.com/online/", img: Logo2, deatail: "Our seamless, real-time integration with QuickBooks Online uses the same transaction manager tool for QB Desktop. While upgrading QB from their desktop software to the cloud is relatively easy, there are a number of steps and potential complexities doing this for cieTrade. If you plan to make this change it needs to be coordinated with our support team in advance." },
            { id: "https://www.sage.com/en-us/products/sage-50/", img: Logo3, deatail: "We continue to offer integration with SAGE 50 (formerly Peachtree Accounting)." },
            { id: "https://www.sage.com/en-us/products/sage-500/", img: Logo4, deatail: "SAGE 500 is an enterprise desktop accounting platform widely used by many of our largest clients worldwide. cieTrade’s integration for this platform is very robust, stable and has been supported for several years. It offers advanced multi-currency and multi-company consolidation." },
            { id: "https://www.sage.com/en-us/sage-business-cloud/intacct/", img: Logo5, deatail: "Sage Intaact is an enterprise cloud tightd ERP platform and natural successor to Sage500 for clients looking to migrate to a cloud tightd solution. We offer real-time integration that works very much like Sage500 including multi-currency, intercompany, and multi-company consolidation. Unlike some other cloud options, our integration uses a local .DLL and offers advantages over web APIs." },
            { id: "https://www.netsuite.com/portal/home.shtml", img: Logo6, deatail: "NetSuite is an enterprise oriented cloud tightd ERP platform for which we offer real-time integration. Like Intacct, our integration methods use a local .DLL instead of making web API calls. It includes multi-currency support but we do not currently offer multi-company support as of yet. This is a newer offering and we have a limited number of clients on this platform at the present time." },
            { id: "https://www.microsoft.com/en-us/dynamics-365/products/business-central", img: Logo7, deatail: "Microsoft Dynamics 365 Business Central is a cloud tightd accounting and financials platform offered by Microsoft for mid-market companies for which we offer real-time integration. It offers a step up from Quickbooks and other starter platforms with more features for larger companies." },
            { id: "https://www.xero.com/us/", img: Logo8, deatail: "Xero is a cloud tightd accounting platform for small businesses. Integration with this accounting solution is currently available for clients on our cloud software and could be made available for desktop clients upon request." },
            { id: "https://www.zoho.com/us/books/", img: Logo9, deatail: "Zoho Books is an online accounting software designed for small businesses to manage their financials. Integration with this accounting solution is currently available for clients on our cloud software and could be made available for desktop clients upon request." },
        ],
    };
    return (
        <div>
            <div className="h-full relative bg-cover" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/P1RBW5-scaled-e1661794714325.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">Accounting Integration</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Instantly updates your accounting software to avoid double entry</h1>
                </div>
            </div>
            <Container className='bg-light py-5'>
                <center><i class="fa-solid fa-link text-red-600 text-5xl"></i></center>
                <h1 className='text-2xl font-bold lh-tight py-2 text-center'>Works with QuickBooks, Sage, Xero and more</h1>
                <h1 className='text-lg lh-tight text-gray-600 text-center'>Our “best of breed” approach to accounting integration doesn’t force you to use a proprietary accounting system, letting you select the software that’s right for your business instead of being locked into a proprietary accounting system. Our real-time accounting link saves time and minimizes errors by automatically synchronizing master data and transaction postings without the use of manual batch files that can easily lead to reconciliation headaches. It can even pull back information such as payment status that can reduce inquiries and minimize access to your books.</h1>
            </Container>

            <Container>
                <Row className='py-5'>
                    {data.Logo.map((item, index) => (
                        <Col lg={4} key={index} className='py-4' >
                            <center><a href={item.id}><img src={item.img} className='w-2/3 py-3'></img></a></center>
                            <h6 className='text-lg text-gray-500 text-center'>{item.deatail}</h6>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className='bg-zinc-800'>
                <Container >
                    <Row className='py-5'>
                        <h1 className='text-4xl font-bold lh-tight text-center text-white py-5'>Key Features of cieTrade's Accounting Integration </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Allows you to choose the software that’s right for your business.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Seamlessly integrates with industry leading accounting and ERP software.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Eliminates redundant and time-consuming double-entry. </h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Avoids errors from manual re-typing.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Simplifies account reconciliation. </h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Saves time by automating the accrual matching process for your business.</h6></div>

                        </Col>
                    </Row>
                </Container>
            </div>


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

export default Accounting;