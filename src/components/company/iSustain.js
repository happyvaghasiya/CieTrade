import { Row, Col, Container } from 'react-bootstrap';
import React from "react";

function ISustain() {
    const data = {
        Client: [
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/integrity-recycling-logo-black.png.webp", description: "For nearly two decades, cieTrade has allowed our company to grow and adapt in every aspect of the recycling and waste industry. No other industry software comes close to cieTrade's support and capabilities.", title: "Ralph Giordano, President" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/CNA-Metals-logo-1.png.webp", description: "cieTrade continues to amaze us. The software and integrated portal have really opened up opportunities to grow our business and differentiate us among our competitors while their support team has provided a level of service we have never experienced before.", title: "Hari Agrawal, CEO" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/select-trading-logo.png.webp", description: "With cieTrade, everything from trade profitability to shipping statistics are instantly available, keeping us on target day in and out. cieTrade has become an invaluable part of our operation and a critical tool to help us grow our business.", title: "Eddie San Giacomo, CEO" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/Untitled-design-1.png.webp", description: "With cieTrade, everything from trade profitability to shipping statistics are instantly available, keeping us on target day in and out. cieTrade has become an invaluable part of our operation and a critical tool to help us grow our business.", title: "Jesse Roberts, VP" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/Untitled-design-2.png.webp", description: "cieTrade has proved to be invaluable in helping us grow and stay competitive, dramatically lowering our operating costs, providing critical data for decision making, and improving service for customers and suppliers.", title: "Jeffrey Levit, President & CEO" },
            { icon: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/Untitled-design-3.png.webp", description: "cieTrade has allowed us to completely organize our business, helping us improve organization of data, equipment tracking, service management and providing critical insight into profitability.", title: "Tyler Yaldo, Founder" },
        ],
        time: [
            { per: "55%", descrip: "Improved customer response time" },
            { per: ">19 hrs.", descrip: "Saved on documentation per week" },
            { per: "54%", descrip: "Increase in orders per person each month" },
            { per: "$42,000", descrip: "Saved per year in accounting errors & oversights" },

        ]
    }

    return (
        <div>
            <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/05/shutterstock_239752759-scaled.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative  pb-40 pt-56 lg:px-60">
                    <h1 className="text-5xl text-white font-bold leading-tight">cieTrade helps iSustain Recycling maximize business performance</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Learn how iSustain increased their operational efficiency and improved financial accuracy by leveraging cieTrade’s workflow features and integrated accounting tools.</h1>
                </div>
            </div>
            <Container>
                <Row className='py-5'>
                    {data.time.map((item, index) => (
                        <Col lg={3} md={6} sm={12} className='hover:shadow-xl p-4 text-center g-0' key={index}>
                            <div>
                                <h1 className='font-bold text-red-600 text-4xl pt-3'>{item.per}</h1>
                                <h1 className='font-bold text-2xl text-gray-700 py-3'>{item.descrip}</h1>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row className='py-12'>
                    <Col lg={6}><center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/iSustainLogo-2-300x240.png.webp" className='w-1/2 py-4'></img></center></Col>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-3xl text-black font-bold'>Introduction</h6>
                        <div className=' py-2'><h6 className='text-lg text-gray-500'>As a waste management company working across the energy, waste, recycling, water and carbon management sectors, iSustain has helped drive sustainability as well as manage and reduce carbon footprints by bringing their clients customized recycling programs since 2014. Prior to using cieTrade, iSustain ran their company solely on manual spreadsheets; however, their team struggled to keep up as the business grew and expanded. Without a proper software system in place, challenges quickly began to arise, prompting iSustain to connect with cieTrade as a solution.</h6></div>
                    </Col>
                </Row>
            </Container>
            <Container className='py-4'>
                <h6 className='text-3xl text-black font-bold'>The Challenge</h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>Initially, as a small startup, iSustain began having trouble quickly responding to customers while handling the demands of their growing business, requiring hours or sometimes even days to properly organize transaction details or create a client report. The absence of a business management platform meant the team also lacked the ability to quickly produce specialized, accurate documentation for their clients and supply-chain partners— spending an average of 15 hours per week on document generation alone. Accurately managing payables and receivables was also a struggle since working with manual spreadsheets made it difficult for the team to track when they had failed to invoice a client or accidentally overpaid a vendor. It didn’t take long for iSustain to realize that all of these challenges incurred real costs and that finding a solution was critical.</h6></div>
            </Container>
            <Container className='bg-light my-5 p-4 py-5'>
                <h6 className='text-red-600 text-4xl'><i class="fa-solid fa-quote-left"></i></h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>When you're trying to run an entire business manually… there's not much difference between a scratch pad and Excel, and that can cause a host of problems. We knew it was time to seek a business enterprise software when we had mistakenly paid two vendors twice.</h6></div>
                <div className=' py-2'><h6 className='text-lg font-bold'> Mark Huber, Head of Business Development</h6></div>
            </Container>
            <Container className='py-4'>
                <h6 className='text-3xl text-black font-bold'>The Solution</h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>iSustain recognized the need for a change in their processes and reached out to cieTrade as a solution provider to help organize and regain control of their business. Through cieTrade’s integrated workflow features and seamless settlement process, iSustain was able to maximize operational efficiency and improve their customer invoicing. cieTrade made it possible for the team to streamline document generation by instantly creating custom-branded Sales Orders, Receiving Reports, Bills of Lading and more with a single-click. Leveraging cieTrade’s advanced reporting tools, iSustain gained critical business insights that spreadsheets or a basic accounting software simply couldn’t offer. Integrated accounting tools also ensured accurate financial record-keeping and an extensive system of checks and balances which helped avoid critical oversights and errors such as paying a bill twice or forgetting to invoice a customer. Additionally, as the iSustain team expanded, cieTrade’s cloud-based platform allowed for improved collaboration among their dispersed workforce, helping to drive productivity and enhancing business performance.</h6></div>
            </Container>
            <Container>
                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/06/2023-06-08_11h00_13.png.webp" className='w-full'></img>
            </Container>
            <Container className='py-4'>
                <h6 className='text-3xl text-black font-bold'>Results</h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>Since 2016, iSustain has experienced significant improvements and advantages from leveraging the platform including increased operational efficiency, reduced overhead costs, improved accuracy and traceability of financial transactions. Today, cieTrade continues to offer iSustain significant value, providing the tools they need to manage their growth and operational challenges as the business scales and evolves..</h6></div>
            </Container>
            <Container className='pb-5'>
                <li className='text-lg text-gray-500'>After implementing cieTrade, their operations team has been able to avoid workarounds and improve their customer response time by 55%.</li>
                <li className='text-lg text-gray-500'>Using cieTrade’s specialized documentation tools, iSustain was able to reduce their document generation time from 19 hours per week to 10 minutes per week.</li>
                <li className='text-lg text-gray-500'>With cieTrade in place, iSustain was able to increase their transaction volume with greater accuracy. After previously only being able to handle 130 orders per person each month, they are now able to handle over 200 orders per person each month, for a new total of approximately 1,000 monthly orders.</li>
                <li className='text-lg text-gray-500'>Through cieTrade’s real-time accounting integration, iSustain increased financial accuracy and saved over $42,000 per year in costly accounting errors and oversights.</li>
            </Container>
            <Container className='bg-light my-5 p-4 py-5'>
                <h6 className='text-red-600 text-4xl'><i class="fa-solid fa-quote-left"></i></h6>
                <div className=' py-2'><h6 className='text-lg text-gray-500'>Working with cieTrade has really been fantastic. As one of the first cloud platforms on the market, it’s helped scale our business and keep our team connected without growing our overhead. The support team has always been very responsive and communicative, helping us leverage the platform and its many features in the best way possible.</h6></div>
                <div className=' py-2'><h6 className='text-lg font-bold'> Mark Huber, Head of Business Development</h6></div>
            </Container>
        </div >

    )
}

export default ISustain;

