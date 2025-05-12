import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Ourstory() {

    return (
        <div>
            <div className="relative bg-cover bg-center h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/05/Mask-Group-30.png.webp')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative pt-56 pb-44 lg:px-60">
                    <h1 className="text-6xl pb-3 text-white text-center font-bold lh-xs">Our Story</h1>
                    <p className="text-xl text-white text-center">cieTrade was launched in 1999 but our story really begins a few years earlier as an idea discussed over lunch between Richard Hamilton and David Haber.</p>
                </div>
            </div>

            <Container className='py-5'>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 py-3">As the controller for a rapidly growing paper & recycling company, Rich was under pressure to secure a line of credit and get control of the operation. But running the business on spreadsheets and with paper trade tickets made it tough to compile data and get timely reports without spending hours of work. He considered having an associate create a custom database program to address some of his needs. However, creating a custom system proved to be more difficult and time consuming than he anticipated and still did not address many of his needs.</p>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 py-3">So, Rich did what a lot of companies do when they can’t find software for their business: he looked into having a consultant customize an existing accounting or ERP package. At first, this approach seemed promising. He would be working with experienced professionals using an established platform that would avoid the risks of building something in house.</p>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 py-3">After reviewing the proposed modifications, Rich quickly realized that the rigid nature of accounting software wasn’t going to provide the flexibility he needed to handle the dynamics of the trading business and would be difficult for his end-users to work with. Also, it wasn’t going to easily support critical functions like matching revenue against expense accruals by load, vital for calculating profits and commissions, without clunky workarounds. Then there was the risk of committing to expensive modifications that relied on consultants that knew little about his business and that would likely not be around to support the work later on, not to mention the expense of upgrading all the customizations in the future.</p>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 py-3">So, Rich reached out to David, a former colleague, that he knew understood the business and had proven experience developing trading software. Rich was confident that together with his knowledge of accounting and Dave’s technical background, they could develop an effective solution that would help streamline his operation while providing the controls needed to satisfy partners and auditors. And long story short, it did.</p>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 py-3">Which brings us back to “lunch”. With the success of the project and after thinking about the frustration with finding a solution in the first place, Rich and Dave talked about the idea of helping other companies facing the same dilemma and over lunch made plans to invest their efforts into creating a better way for commodity traders and recyclers to run their business – and that’s how cieTrade got its start.</p>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 py-3">Once the software was launched, it was quickly embraced by many of the leading paper traders, job lot dealers and scrap brokers. As the software continued to evolve, it also attracted a number of large commercial recycling companies that outgrew using scrap yard software.</p>
                <p className="lg:px-48 md:px-0 sm:px-0 text-lg text-gray-500 pt-3">Our goal has been and continues to be to help our clients build a more successful trading or recycling business by offering leading edge software & tools that can help reduce costs, improve customer service, and maximize control. And with the challenges in today’s commodity markets its never been more important to leverage technology to gain a competitive edge.</p>
            </Container>
        </div>
    );
};

export default Ourstory;