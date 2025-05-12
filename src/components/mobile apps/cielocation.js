import { Row, Col, Container } from 'react-bootstrap';
import Cielocation from '../../assets/img/cielocation.png';
import Appstore from '../../assets/img/appstore.png';
import Googleplay from '../../assets/img/googleplay.png';
import Converting from '../../assets/img/converting.png';
import Scan from '../../assets/img/scan.png';
import Relocate from '../../assets/img/relocate.png';
import Add from '../../assets/img/add.png';
import Selfservice from '../../assets/img/self-service.png';
import Ciedispatchh from '../../assets/img/ciedispatch.png';
import { useState } from "react";
import YouTube from 'react-youtube';


function Cielocationn() {
    const [activeIndex, setActiveIndex] = useState(null);
    const YouTubeEmbed = ({ videoId }) => (
        <div className="w-full h-[500px] ">
            <YouTube videoId={videoId} className="w-full h-full" opts={{ width: '100%', height: '100%' }} />
        </div>
    );
    const faqs = [
        {
            question: "What kinds of details can I view for each inventory item through cieLocation?",
            answer: "When an item number, serial number, or barcode label is scanned, cieLocation will automatically show key information such as the product name, quantity, packaging type, supplier, warehouse and warehouse location and more.",
        },
        {
            question: "Can I edit inventory locations directly on the cieLocation app?",
            answer: "Yes, cieLocation allows users to register material movements directly on the app, and instantly updates the inventory location for your back-office to see in your cieTrade account.",
        },
        {
            question: "Does cieLocation allow me to scan iventory barcode labels directly with my mobile device?",
            answer: "Yes, once you have allowed cieLocation access to use your camera, it will allow you to scan barcode labels directly with your mobile device.",
        },
        {
            question: "How do I set up users for cieLocation??",
            answer: "To set up cieLocation users, please contact our Support Team with a list of users and credentials (user IDs and passwords) that you wish to set up.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/mobile-apps.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-32 pt-52">
                    <h1 className="text-6xl text-white font-bold leading-tight">cieLocation</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Quickly check and edit inventory, confirm availability and perform stock and cycle counts</h1>
                    <div className='my-5'>
                        <a href={'/Bcielocation'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-tight ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>
            <Container>
                <Row className='g-0 py-12'>
                    <Col lg={6}><img src={Cielocation} className='w-full py-14'></img></Col>
                    <Col lg={6} className='py-10'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Streamline inventory management and minimize
                            time spent with physical stock counts</h6>
                        <div className=' py-2'><h6 className='text-xl text-gray-500 '><span className='font-bold text-red-600'>cieLocation</span> improves identification and accuracy of material movements across warehouse locations by providing warehouse personnel with an instant way of identifying and relocating inventory, checking and confirming the availability of items in your warehouse and minimizing time spent with physical stock and cycle counts.</h6></div>
                        <div className='flex py-2'>
                            <a href='https://apps.apple.com/us/app/cielocation/id1314428136'> <img src={Appstore} className='w-60'></img></a>
                            <a href='https://play.google.com/store/apps/details?id=com.cietradesystems.cieLocation&hl=en_US&gl=US'><img src={Googleplay} className='w-60 '></img></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12}>
                        <YouTubeEmbed videoId="jK6Tft7rzfM" />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='g-0 py-12 '>
                    <Col lg={6}><img src={Converting} className='w-full'></img></Col>
                    <Col lg={6} className='py-5'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Stock Confirmation Checks</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '>Input a Converting Job, Receiving Ticket or Shipping Ticket number to retrieve a list of the materials scheduled to be consumed, brought in or shipped out. Items can easily be marked as Found, Not Found, or Unconfirmed, making it easier to match requested inventory with what is actually available.</h6></div>
                    </Col>
                </Row>
            </Container>

            <div className='p-12 bg-light '>
                <Row className='g-0'>
                    <Col lg={6} className='py-5'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Scan & Identify Items</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '>Search for material using the inventory item number, serial number or by quickly scanning the inventory barcode label to quickly pull up key information such as the product name, quantity, warehouse location and more.</h6></div>
                    </Col>
                    <Col lg={6}><img src={Scan} className='w-full'></img></Col>
                </Row>
            </div>
            <Container>
                <Row className='g-0 py-12 '>
                    <Col lg={6}><img src={Relocate} className='w-full'></img></Col>
                    <Col lg={6} className='py-5'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Quickly Relocate Inventory</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '>Users can easily move inventory from one location to another and register these movements directly on the app, instantly updating the inventory location for your back-office in your cieTrade account.</h6></div>
                    </Col>
                </Row>
            </Container>
            <div className='p-12 bg-light '>
                <Row className='g-0'>
                    <Col lg={6} className='py-5'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Physical Stock & Cycle Count</h6>
                        <div className=' py-2'><h6 className='text-xl text-gray-500 '>Allows warehouse staff to scan existing inventory or even add missing inventory items found at a warehouse location to conduct and streamline stock and cycle counts.</h6></div>
                    </Col>
                    <Col lg={6}><img src={Add} className='w-full'></img></Col>
                </Row>
            </div>
            <div className='bg-zinc-800'>
                <Container>
                    <Row className='py-5'>
                        <h1 className='text-4xl font-bold lh-tight text-center text-white py-4'>Key Features </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Minimizes time spent with physical stock and cycle counts.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Eliminates paper stock count sheets.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Scans inventory barcodes to check stock identification and edit warehouse locations.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Scans stock for material processing, receiving or shipping and confirms against a preselected list of inventory items.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Scans existing inventory or adds missing items at a warehouse location to conduct a stock count.</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Provides up-to-date visibility on physical inventory status which can be viewed through the cieTrade inventory module.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Safeguards data with individual user logins and permissions managed directly from cieTrade.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Restricts users to view only their Department’s warehouses.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Never stores business information on your mobile device.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Available for Apple iOS, Android mobile devices and handheld computers.</h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='py-24 text-center'>
                <h1 className='text-4xl font-bold lh-tight py-2'>Want to see a full list of features? </h1>
                <h1 className='text-4xl font-bold lh-tight text-red-600 '>Download our cieLocation brochure </h1>
                <div className='py-4'> <a href={'/Bcielocation'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-tight ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></div>
            </Container>
            <div className='bg-light'>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <h1 className='text-4xl font-bold lh-tight text-center py-4'>Additional Tools</h1>
                            <Col lg={6} >
                                <img src={Selfservice} className='w-full h-96 py-2'></img>
                                <h1 className='font-bold text-red-600 text-xl pt-3'>WEB APPLICATIONS</h1>
                                <h1 className='font-bold  text-3xl py-2'>Self-Service Portal</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s self-service portal gives supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.</h6>
                                <div className='py-3'> <a href={'/SelfServices'} className="text-red-600 font-bold text-tight py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={6}>
                                <img src={Ciedispatchh} className='w-full h-96'></img>
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieDispatch</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieDispatch is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos.</h6>
                                <div className='py-3'> <a href={'/Ciedispatch'} className="text-red-600 font-bold lg:text-tight md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
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

export default Cielocationn;