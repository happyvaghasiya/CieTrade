import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import thumb from '../../assets/logo/thumb.webp';
import spreadsheets from '../../assets/logo/spreadsheets.webp';
import programs from '../../assets/logo/programs.webp';
import puzzle from '../../assets/logo/puzzle.webp';
import take from '../../assets/logo/take-control.webp';
import accounting from '../../assets/logo/accounting.webp';
import integration from '../../assets/logo/integration-matters.webp';
import deliver from '../../assets/logo/deliver-ROI.webp';
import industry from '../../assets/logo/industry-credibility.webp';
import technology from '../../assets/logo/technology.webp';


function WhyCieTrade() {

    const data = {
        cietrade: [
            { img: thumb, head: "We understand your business", description: "You’re not going to have to explain to us what a moisture deduction is, how to calculate internal interest, or the difference between basis weight and substance. We already know. And that means you’ll have the benefit of leveraging our experience and industry knowledge to solve problems, improve business practices, and maximize the value of your software investment." },
            { img: spreadsheets, head: "Way better than using spreadsheets", description: "Eliminates the disorganization, unproductive workarounds, and tedious manual procedures from running your business on spreadsheets, not to mention the lack of security and dependence on individual employees. Our integrated operations and financial platform eliminates double-entry, lets you easily find and retrieve data, automates tasks and documents, controls access, and easily generates reports without spending hours or days." },
            { img: programs, head: "Avoids risky home-grown programs", description: "Building your own software can be a risky proposition especially with consultants that don’t know anything about your business, that can’t promise how much or how long it might take, and that may not be around later to support it later, all while using technology that will eventually need to be upgraded. cieTrade helps you avoid these problems with trading and recycling software created specifically for your business, backed by people who know the business, used by many industry leaders, using the latest technology, with features that are constantly updated." },
            { img: puzzle, head: "Does what your accounting system can’t (or at least not very easily)", description: "Accounting software is fine for “accounting”. But it’s simply not flexible enough to handle the dynamics of the trading and recycling business where material can be bought and sold with different names or weights and where prices can change at any time. It also won’t calculate gross profit on trades, generate commissions or track logistical events without clunky workarounds. cieTrade is specifically designed to support all your unique requirements while seamlessly working with your accounting package." },
            { img: take, head: "Helps you take control of your business", description: "Our solutions go well beyond just tracking orders and transactions, providing control over business activity and ownership of business intelligence. cieTrade makes all of your vital business information easily accessible from one platform, managing all your work in-process to avoid oversights, tracking sales activity and history, capturing email messages, documents and photos, and providing the specialized reports and analytic tools you need to gain insight into trends and overall business performance for smarter decision making." },
            { img: accounting, head: "Best of Breed Accounting that works", description: "cieTrade’s “best of breed” approach to accounting integration doesn’t force you to use a proprietary general ledger package, letting you choose the accounting software that’s right for your business. Our real-time accounting link also saves time and minimizes errors by automatically synchronizing master data and posting transactions without manual batch files that can easily lead to reconciliation headaches. It can even pull back information such as payment status to reduce inquiries." },
            { img: integration, head: "Integration Matters", description: "Eliminating manual data entry is essential to reducing costs and stay competitive. cieTrade helps by offering a variety of B2B integration and e-commerce options that can directly boost productivity and minimize errors including: EDI VAN and FTP services, integration with ocean carriers through INFOR-NEXUS, marine terminals, and 3PLs, SED filings with U.S. customs and more." },
            { img: deliver, head: "We deliver TCO and ROI too", description: "We understand the importance of providing value for your software investment and cieTrade delivers with cost saving productivity features, greater visibility, and key analytics that can help you get control of your business. You’ll even see a ROI in a matter of weeks. We also help control your IT costs, with a fixed monthly payment plan based on the number of users, and a separate training fee. That’s it. There are no big upfront fees, no additional charges for minor customizations, enhanced features, or support services." },
            { img: industry, head: "Industry Credibility", description: "Knowing which business software vendor to choose is never easy, especially with everyone claiming to be “number one” and all the competing testimonials. But one look at who some of our clients are and how long many of them have been with us and you can draw your own conclusions about our reputation and the confidence and trust our customers have placed with us and our solutions." },
            { img: technology, head: "Scalable Technology you won’t outgrow", description: "Whether your business is a startup or global enterprise, cieTrade’s unique trade centric model provides the flexibility you need to quickly adopt new business models and pursue opportunities. Its advanced system architecture lets you easily scale up to meet customer demands or handle greater transaction volume, keeping your business information in control and avoiding costly upgrades or modifications." },
        ],
    };
    return (
        <div>
            <div className="relative bg-cover bg-center h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/2J3A8856-1-scaled.jpg.webp')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative pt-60 pb-44">
                    <h1 className="text-6xl text-white text-center font-bold lh-xs">Why cieTrade?</h1>
                </div>
            </div>

            <Container>
                <Row className='pt-5'>
                    {data.cietrade.map((item, index) => (
                        <Col lg={12} md={12} sm={12} key={index}>
                            <Row className='py-4'>
                                <Col lg={2} md={2} sm={12}>
                                    <img src={item.img} alt="" />
                                </Col>
                                <Col lg={10} md={10} sm={12}>
                                    <h1 className='font-bold text-3xl pt-2 pb-4'>{item.head}</h1>
                                    <p className='text-lg text-gray-500'>{item.description}</p>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default WhyCieTrade;