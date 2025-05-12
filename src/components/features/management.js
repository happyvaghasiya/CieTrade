import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from "react";
import mobile1 from '../../assets/img/mobile1.webp';
import mobile2 from '../../assets/img/mobile2.webp';
function Management() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Is there a mobile app for drivers?",
            answer: "Yes, cieDispatch (available for iOS & Android devices) allows drivers to retrieve a list of assigned tickets for both multi-stop routes, bale-routes & “out/back” runs. cieDispatch also lets drivers easily complete or fail services and upload site photos to the corresponding Dispatch Ticket in the system.",
        },
        {
            question: "How can my back-office keep updated on our drivers?",
            answer: "Through cieDispatch, your driver can map directions to the site, see pick up notes such as gate codes or special instructions, take pictures, mark the job as complete or incomplete, get signatures from your partners, record grades and materials picked up, and even send documents.",
        },
        {
            question: "Can I use the dispatch board if I'm just tracking my customer's services?",
            answer: "Yes. Dispatch tickets can be easily generated from a customers schedule, allowing you to track completed services at their sites. Additionally scale tickets, photos, or bin sensor readings can be attached to the tickets so you can pass them along to your customer. The dispatch board can work for anyone who has their own drivers, manages third party haulers, or is tracking their customers services.",
        },
    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const data = {
        Tool: [
            { img: mobile1, head: "MOBILE APPS", title: "cieDispatch", p: "cieDispatch is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos.", id: "Ciedispatch" },
            { img: mobile2, head: "MOBILE APPS", title: "cieMobile", p: "cieTrade’s mobile reporting app provides sales reps and managers with real-time access to cieTrade account information and key management reports from the road or anywhere else.", id: "Ciemobile" },
        ],
    }


    return (
        <div className='text-white'>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/2025-01-28_14h16_20.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-5xl font-bold leading-tight">Dispatch Management</h1>
                    <h1 className="text-xl py-3 leading-tight">Dispatch management software for recyclers and waste brokers</h1>
                </div>
            </div>

            <div className='px-4'>
                <Row className='py-12'>
                    <Col lg={6} md={12}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/cietrade-dispatch-management-software.png.webp" alt="booking" className='img-fluid' /></Col>
                    <Col lg={6} md={12}>
                        <h1 className='text-3xl font-bold text-black lh-sm'>Easily manage both internal and third-party service jobs</h1>
                        <h6 className='text-gray-500 lg:text-lg pb-5 pt-3'>cieTrade’s dispatch management tools help recyclers and waste brokers accurately and effectively meet their partner’s service demands, enhance operational control and reduce double-entry all while eliminating the inefficiencies of manual spreadsheets and paper dispatch tickets. Whether you’re scheduling on-demand or recurring jobs, optimizing multi-stop routes or tracking equipment movements and driver assignments, our specialized industry-specific software makes it easier for your back-office to manage all aspects of your dispatch activity from one seamless platform.</h6>
                        <a href={'/Requestdemo'} className="bg-red-600 hover:bg-red-700 p-3 font-bold">Request Demo<i class="fa-solid fa-arrow-right ps-1 pt-1 "></i></a>
                    </Col>
                </Row>
            </div>

            <div className='bg-zinc-800 py-5'>
                <h1 className='text-3xl font-bold lh-base text-center'>How cieTrade can help make your dispatch management more efficient</h1>
                <Row className='g-0 px-4'>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div><i class="fa-solid fa-map-location-dot text-red-600 text-5xl py-2"></i>
                            <h1 className='text-3xl font-bold py-3'>Effectively meet service demands</h1>
                            <h1 className='text-xl'>Optimize the planning and fulfillment of all your partner’s service requests while saving time and increasing efficiency.</h1>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div><i class="fa-solid fa-truck text-red-600 text-5xl py-2"></i>
                            <h1 className='text-3xl font-bold py-3'>Simplify dispatch scheduling</h1>
                            <h1 className='text-xl'>Quickly set up both on-demand and recurring service jobs and track the status of your dispatch activity from a single dashboard.</h1>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div>
                            <i class="fa-solid fa-route text-red-600 text-5xl py-2"> </i>
                            <h1 className='text-3xl font-bold py-3'>Streamline driver assignments</h1>
                            <h1 className='text-xl'>Easily assign single stop or multi-stop dispatch jobs to your drivers and provide them with a list of scheduled jobs for the day.</h1>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div><i class="fa-solid fa-laptop text-red-600 text-5xl py-2"></i>
                            <h1 className='text-3xl font-bold py-3' >Get up-to-date visibility</h1>
                            <h1 className='text-xl'>Get real-time job updates, including ticket statuses, equipment photos and more, directly through our integrated mobile app.</h1>
                            <a href={'/Ciedispatch'}><button className='text-red-600 hover:text-red-700 font-bold pt-2'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='px-3'>
                <Row className='g-0 py-12'>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-3xl text-black font-bold py-4'>Dispatch Management</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Organize all of your dispatch activity in one place.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Record dispatch job details including customer and service location, type of service, scheduled date and time, equipment type, hauler/carrier, dispatch notes for drivers and more.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Color-coded labels make it easy to track the status of your dispatch tickets, including open, dispatched, completed, failed or canceled.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Easily link dispatch jobs for material pick-ups or deliveries to inventory receiving tickets or shipments.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Instantly generate work order documents and send them to your drivers or to any third-party hauler/carrier directly from your cieTrade account.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/dispatch-board-2.png.webp"></img></Col>
                </Row>
                <Row className='g-0 py-12'>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/route-management-1.png.webp"></img></Col>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-3xl text-black font-bold py-4'>Route Management</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Set up recurring, multi-stop routes for all of your daily, weekly and monthly service requests or build one-time routes from scratch or by grouping together existing dispatch tickets.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Quickly add or rearrange stops to create more optimized routes for your drivers and enhance the efficiency of your fleet.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Instantly generate route detail documents and send them to your drivers or to any third-party hauler/carrier directly from your cieTrade account.</h6></div>
                    </Col>
                </Row>
                <Row className='g-0 py-12'>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-3xl text-black font-bold py-4'>Equipment Tracking</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Track all of your equipment from a single dashboard, making it easier to see which pieces are currently available or allocated to a customer.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Record important equipment details including equipment number, type, tare weight, last inspection date, equipment images and more.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Add equipment pieces on a dispatch ticket to track equipment movements including pickups, deliveries, swaps and dump-and-returns.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Quickly view an equipment’s current location and location history.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/equipment-tracking.png.webp"></img></Col>
                </Row>
                <Row className='g-0 py-12'>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/driver-assignment-2-1.png.webp"></img></Col>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-3xl text-black font-bold py-4'>Driver Assignments</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Centralized dispatch calendar organizes all assigned and unassigned dispatch jobs in one place.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Drag and drop unassigned dispatch tickets to easily schedule jobs for your available drivers.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Set your drivers up with access to our integrated mobile dispatch app, which provides them with a list of their open service jobs and helps keep them connected to the back office.</h6></div>
                        <a href={'/Ciedispatch'}><button className='text-red-600 hover:text-red-700 font-bold pt-2'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                    </Col>
                </Row>
            </div>

            <div className='bg-zinc-800 py-20 lg:px-72'>
                <h1 className='text-4xl font-bold lh-tight text-center'>Learn how cieTrade can help you improve your dispatch management</h1>
                <div className='pt-5'><center><a href={'/Binventory'} className="bg-red-600 hover:bg-red-700 p-3 font-bold text-base ">Request Demo<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </div>


            <div className='bg-light py-5'>
                <Container className='lg:px-12'>
                    <h1 className='text-4xl text-center font-bold'>Additional Tools</h1>
                    <Row>
                        {data.Tool.map((item, index) => (
                            <Col lg={6} md={6} sm={12} className='py-5' key={index}>
                                <img src={item.img} alt="" className='w-full img-fluid' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>{item.head}</h1>
                                <h1 className='font-bold text-3xl text-black py-3'>{item.title}</h1>
                                <p className='text-gray-500 text-lg'>{item.p}</p>
                                <a href={item.id}><button className='text-red-600 hover:text-red-700 font-bold pt-3'>learn More <i class="fa-solid fa-arrow-right ms-2 px-2 p-1 text-xs bg-red-600 text-white rounded-full"></i></button></a>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="max-w-7xl mx-auto p-4 ">
                    <h1 className="text-4xl font-bold text-black text-center mb-8">FAQ</h1>
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
};
export default Management;