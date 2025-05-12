import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import laptop from '../../assets/img/laptop.webp';
import laptop1 from '../../assets/img/laptop1.webp';
import mobile from '../../assets/img/mobile.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };
    const data = {
        industries: [
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-1.svg", name: "Brokerage", head: 'Brokerage', p: 'Our seamless, end-to-end brokerage solution organizes financials and logistics for every load with our intuitive and unique buy/sell form.', id: 'Commodity' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/recycling-plants-icon.svg", name: "Recycling Plants", head: 'Recycling Plants', p: 'Recycling software that integrates your scale with contract pricing, settlement, inventory, shipping, billing, and financials.', id: 'Plant' },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/international-trading.svg", name: "International Trading", head: 'International Trading', p: 'Automates your entire trading cycle from order management, planning, credit and compliance to execution, documentation, and profitability reporting.', id: "International" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-3.svg", name: "Paper Merchants", head: 'Paper Merchants', p: 'Business management, inventory control, and converting software specifically adapted for paper merchants, brokers and job lot dealers.', id: "Merchant" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-4.svg", name: "Pulp & Paper Trading", head: 'Pulp & Paper Trading', p: 'Advanced software for international trading houses that handle pulp, paper, lumber and other commodities in the forest products industry.', id: "Trading" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-5.svg", name: "Plastic Recycling", head: 'Plastic Recycling', p: 'Includes inventory control with barcode scanning, manages production jobs, tracks landed cost, material sources, yield, quality, gross profit and calculates commissions.', id: "Recycling" },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/agricultural-icon.png.webp", name: "Agricultural", head: 'Agricultural', p: 'Specialized software that drives profitability and increases visibility  for businesses manufacturing, trading and transporting agricultural commodities.', id: "Agricultural" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/02/homepage-service-icon-6.svg", name: "Waste Brokerage", head: 'Waste Brokerage', p: 'One seamless software that manages your entire workflow from service tracking and dispatching to billing and hauler reconciliation.', id: "Brokerage" },
            { i1: "https://www.cietrade.com/wp-content/uploads/2022/05/scrap-claw.svg", name: "Scrap Metal", head: 'Scrap Metal', p: 'Scrap metal software for commercial yards and retail recycling, material processing, scrap commodity trading and compliance.', id: "Scrap" },
        ],
        slider: [
            { i1: "https://www.cietrade.com/wp-content/uploads/2024/07/APJ-2.webp", i2: "https://www.cietrade.com/wp-content/uploads/2024/07/ap-j-website.webp", p: "As a rapidly growing plastics recycling business, AP&J Recycling needed an industry-specific solution to be able to manage their operation. Learn how cieTrade helped eliminate manual spreadsheets, improve inventory tracking and increase accuracy of COGS.", },
            { i1: "https://www.cietrade.com/wp-content/uploads/2024/07/iStock-482693099.webp", i2: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/07/iSustain-logo-308x80-1.png.webp", p: "Prior to using cieTrade, iSustain ran their company solely on manual spreadsheets; however, their team struggled to keep up as the business grew and expanded. Without a proper software system in place, challenges quickly began to arise, prompting iSustain to connect with cieTrade as a solution.", },
            { i1: "https://www.cietrade.com/wp-content/uploads/2024/07/pasha-background.webp", i2: "https://www.cietrade.com/wp-content/uploads/2024/07/Pasha-logo-308x44-1.webp", p: "In their continued commitment to embrace new technology and introduce leading-edge techniques to speed up and refine their operations, Pasha Recycling sought a comprehensive software that could provide complete traceability throughout their supply chain.", },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/07/PET1.jpg.webp", i2: "https://www.cietrade.com/wp-content/uploads/2024/07/cpr-inc.-logo-308x44-1-1.webp", p: "Before cieTrade, Commercial Plastics developed its own custom Microsoft Access database to track inventory and manage operations. However, their team soon realized the system wasn’t as efficient as they’d hoped and it’d become difficult and time-consuming to maintain a home-grown program", },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/01/shutterstock_418634776-scaled-630.jpg.webp", i2: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/02/homepage-slider2-logo.png.webp", p: "Lack of real-time integration with accounting software was problematic for Canusa Hershman. cieTrade’s recycling software has helped them grow from a domestic to an international trader by handling transactions faster.", },
            { i1: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/01/shutterstock_146583215-scaled-630.jpg.webp", i2: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/White-Paper-Tigers-Logo.png.webp", p: "Having started with a custom solution, The Paper Tigers quickly began to realize the redundancies and loss of productivity. Learn how cieTrade helped grow their business while reducing operational costs by 35-40%.", }
        ],
        mobile: [
            { name: "cieLocation", p: "Helps your warehouse check and edit inventory, confirm availability and perform stock and cycle counts.", id: "CieLocationn" },
            { name: "clickBale", p: "Mobile app that helps keep track of your baled inventory directly from the warehouse or scrap yard.", id: "ClickBale" },
            { name: "cieDispatch", p: "Mobile app for drivers to view and complete dispatched loads while staying in contact with the back office.", id: "Ciedispatch" },
            { name: "cieMobile", p: "Mobile CRM Platform that provides access to account information and key business reports from anywhere.", id: "Ciemobile" },
            { name: "ciePhoto", p: "Productivity app that captures & manages photos for export shipments and material quality claims.", id: "Ciephoto" },
        ],
        Events: [
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/10/Plastics-Recycling-World-Expo-News-Events-Page.png.webp", head: "Past Events", title: "Visit us at the Plastics Recycling World Expo 2024 in Cleveland, OH", p1: "October 21, 2024", p2: "Join us for the annual Plastics Recycling World Expo at the Huntington Convention Center where we will be showcasing our Modern Cloud Software for Plastics ...", id: "Pastevent" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/10/cieMobile-2.0-updated.png.webp", head: "Press Releases", title: "cieTrade Launches Updated Mobile Reporting app, cieMobile", p1: "October 9, 2024", p2: "Updated cieMobile app helps recyclers and exporters be productive and work from anywhere. Norwalk, CT — October 9th — cieTrade Systems, Inc., a global leader in ...", id: "Pressreleases" },
            { img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/09/Booking-ETA-PR-WEB-IMAGE.png.webp", head: "Press Releases", title: "cieTrade Launches an Automated Booking ETA Update Service for Logistics Management", p1: "September 25, 2024", p2: "New automated booking ETA update service makes logistics management more efficient for exporters. Norwalk, CT — September 25th — cieTrade Systems Inc., a leader in ...", id: "Pressreleases" },
        ],
    };
    const items = [
        { title: "Lets You Work More Effectively", img: "https://www.cietrade.com/wp-content/uploads/2022/02/work-effectively-icon.svg", description: "cieTrade saves time and avoids double-entry by eliminating spreadsheets. It lets you manage all your critical business data from one place that can be easily accessed from anywhere." },
        { title: "Organizes Your Operation", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/02/folder-red.png.webp", description: "cieTrade’s unique “file folder” concept organizes the financials, logistics, documents and more for each inbound and outbound load that can be instantly retrieved with any billing or shipping reference." },
        { title: "Manages Orders & Pricing", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/red-tag.png.webp", description: "cieTrade quickly creates both spot and contract orders. It also supports index formula and differential pricing, manages order activity and price history, all from a central dashboard." },
        { title: "Helps Avoid Oversights", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/magnifying-red.png.webp", description: "cieTrade’s built-in workflow tools let you track shipping status, billing tasks, claims and more so that nothing gets overlooked." },
        { title: "Generates Documentation", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/file-red.png.webp", description: "cieTrade saves time by creating all your specialized shipping and billing documentation custom-branded for your business using customizable templates with digital signatures." },
        { title: "Automates Email", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/mail-red.png.webp", description: "cieTrade’s user-definable email templates let you customize subject lines and messages. Then, you can easily send multiple photos and attachments directly to trading partners with one mouse click." },
        { title: "Create Statements & Settlements", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/money-icon.png.webp", description: "cieTrade streamlines your month end by quickly processing payments and generating professional shipping statements for your industrial suppliers and commercial recycling accounts." },
        { title: "Advanced Reporting", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/monitor-red.png.webp", description: "cieTrade provides critical business insight with gross profit trading reports by customer, supplier, product and more. You can also track the contribution of your sales reps, view tonnage and margin trends, plus more." },
        { title: "Seamless Accounting Integration", img: "https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/links-red.png.webp", description: "cieTrade eliminates manual double-entry and improves accuracy with seamless integration to popular accounting software such as Quickbooks and Xero." },
    ];
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div>
            <div className="relative bg-cover bg-center w-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/paper-warehouse-background.png.webp')` }}>
                <div className="text-center pt-40 pb-20">
                    <h1 className="text-5xl text-white font-bold leading-tight">Recycling Software to <br />Manage and Grow Your Business</h1>
                </div>
                <img src={laptop} className='' />
            </div>

            <div className='bg-light'>
                <Container>
                    <h1 className='text-center pt-20 text-4xl font-bold'>Industries We Serve</h1>
                    <Row className="g-0 p-4 py-5">
                        {data.industries.map((item, index) => (
                            <Col lg={4} key={index} className="text-center">
                                <a href={item.id} className="text-center">
                                    <div className="m-2 bg-white shadow-sm group relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                        <div className={`px-5 py-4 shadow-sm transition-colors duration-300 ${hoveredIndex === index ? 'bg-red-600' : ''}`}>
                                            <img src={item.i1} className={`w-56 h-48 object-contain mx-auto transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`} />
                                            <h1 className={`text-2xl font-semibold py-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-black'}`}>{item.name}</h1>
                                            <h1 className={`border-b-2 w-16 m-auto transition-colors duration-300 ${hoveredIndex === index ? 'border-white' : 'border-red-600'}`}></h1>
                                        </div>
                                        {hoveredIndex === index && (
                                            <div className="absolute inset-0 bg-red-600 flex px-2 flex-col items-center justify-center">
                                                <h1 className='text-white px-4 py-2 text-center text-2xl font-bold'>{item.head}</h1>
                                                <p className="text-white px-4 py-2 text-center">{item.p}</p>
                                                <h1 className="mt-2 text-white font-bold tracking-wider">See Features<i class="fa-solid fa-arrow-right ms-3 mt-2 text-xs px-2 text-red-600 bg-white p-1 rounded-full"></i></h1>
                                            </div>
                                        )}
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <Slider {...settings}>
                {data.slider.map((item, index) => (
                    <Col lg={12} md={12} sm={12} key={index}>
                        <div className="bg-cover w-full relative" style={{ backgroundImage: `url('${item.i1}')` }}>
                            <div className="pt-20 pb-96 inset-0 bg-black bg-opacity-50">
                                <Container>
                                    <Row className='absolute'>
                                        <Col lg={8} md={12} sm={12}>
                                            <img src={item.i2} alt="logo" className='w-80' />
                                            <p className='py-4 lg:text-2xl md:text-xl sm:text-xl text-white'>{item.p}</p>
                                            <a href={'/'}><button className='bg-red-600 p-2 mx-2 mt-2 text-white font-bold'>Read the Case Study <i class="fa-solid fa-arrow-right ps-2 pt-1"></i></button></a>
                                            <a href={'/'}><button className='bg-white p-2 mx-2 mt-2 text-black font-bold'>See More Success Stories <i class="fa-solid fa-arrow-right ps-2 pt-1"></i></button></a>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                ))}
            </Slider>

            <Container>
                <Row className='py-20'>
                    <Col lg={6} md={12} sm={12}>
                        <img src={laptop1} className='img-fluid' />
                    </Col>
                    <Col lg={6} md={12} sm={12} className='pt-4'>
                        <h1 className='text-xl text-uppercase text-red-600 font-bold'>Self-Service Portal</h1>
                        <h1 className='text-3xl font-bold py-3'>Advance customer service, minimize office requests, and reduce operating costs.</h1>
                        <p className='pb-2 text-gray-500 text-lg'>cieTrade’s self-service portal gives customers and supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and much more.</p>
                        <a href={'/SelfServices'}><button className='bg-red-600 hover:bg-red-700 px-4 mt-2 py-3 text-white font-bold'>See Features <i class="fa-solid fa-arrow-right ps-3 pt-1"></i></button></a>
                    </Col>
                </Row>
            </Container>

            <div className='bg-light'>
                <Container>
                    <Row className='py-20 bg-gray-50'>
                        <Col lg={7} md={12} sm={12}>
                            <h1 className='text-xl text-uppercase text-red-600 font-bold'>Mobile Apps</h1>
                            <h1 className='text-3xl font-bold py-3'>Our mobile apps save time and keep your team connected.</h1>
                            {data.mobile.map((item, index) => (
                                <div key={index}>
                                    <a href={item.id}><h1 className='text-lg font-bold text-red-600'>{item.name}</h1></a>
                                    <p className='pb-2 text-gray-500 text-lg pe-5'>{item.p}</p>
                                </div>
                            ))}
                        </Col>
                        <Col lg={5} md={12} sm={12}>
                            <img src={mobile} alt="mobile" className='img-fluid w-96 pt-5' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className='py-5'>
                    <Col lg={4} md={12} sm={12} className='pb-5'>
                        <h1 className='text-4xl font-bold pe-14 py-3'>Learn how our trading and recycling software can benefit your business</h1>
                        <p className='pb-2 text-gray-500 pe-4 text-lg'>Our trading and recycling software uses an operations-centric model that manages logistics activity around “buy/sell” trading forms and scale tickets that are familiar to your end-users and easy to work with. Our forms work like virtual file folders, capturing shipping references, transaction values, photos, scanned documents and anything related to a shipment so that everything is well organized and easily accessible.</p>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='pb-5'>
                        <div className="flex">
                            <div className="w-96 space-y-4">
                                {items.map((item, index) => (
                                    <div key={index} onClick={() => setSelectedItem(item)} className={`px-3 py-2 cursor-pointer font-bold border-l-2 ${selectedItem.title === item.title ? "border-red-600 text-red-600" : "border-transparent"} hover:text-red-600 hover:border-red-600`}>{item.title}</div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='pb-5'>
                        <div className="w-full h-fit pb-5 bg-white shadow-lg rounded-lg">
                            <img src={selectedItem.img} className='img-fluid' />
                            <h2 className="text-2xl font-semibold pe-20 ps-4 pb-3">{selectedItem.title}</h2>
                            <p className="text-gray-500 text-lg pe-3 ps-4">{selectedItem.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='bg-light'>
                <Container>
                    <h1 className='text-4xl text-center py-5 font-bold '>Latest News & Events</h1>
                    <Row className=''>
                        {data.Events.map((item, index) => (
                            <Col lg={4} md={12} sm={12}>
                                <div key={index} className='pb-4'>
                                    <img src={item.img} className='img-fluid w-full pt-5' />
                                    <div className='p-3 px-4'>
                                        <a href={item.id}><h1 className='text-uppercase text-red-600 text-xs font-bold pe-14 pt-3'>{item.head}</h1></a>
                                        <a href={'/Readthepost'}><h1 className='text-2xl font-bold py-2'>{item.title}</h1></a>
                                        <p className='text-gray-500 text-xs'>{item.p1}</p>
                                        <p className='text-gray-500 text-lg py-3'>{item.p2}</p>
                                        <a href={'/Readthepost'}><button className='text-red-600 hover:text-red-700 font-bold'>Read the Post <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;