import { Row, Col, Container } from 'react-bootstrap';
import { useState } from "react";
import Appstore from '../../assets/img/appstore.png';
import Googleplay from '../../assets/img/googleplay.png';

// import YouTube from 'react-youtube';

function Ciephoto() {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What are the requirements to use ciePhoto?",
            answer: "ciePhoto is exclusively for the use of cieTrade clients. The app is compatible with any iPhone device running iOS 8 or higher. It is not compatible with Apple iPads. Wi-Fi and cellular internet connections are needed to submit photos.",
        },
        {
            question: "Is there a cost to use ciePhoto?",
            answer: "Yes. There is a nominal charge to process the photos associated with each shipping container or received trailer. However, there are no user license fees which means that you can setup as many users as you wish. Please contact us for additional information on cost.",
        },
        {
            question: "What happens if my Internet connection goes down? Can I still take pictures?",
            answer: "If your device loses internet connection, you can still capture photos with the app and your photos will be stored in ciePhoto. Once your internet connection is available, you can send your stored photos and will be placed in the app’s Upload History.",
        },
        {
            question: "How do I set up users for ciePhoto?",
            answer: "To set up ciePhoto users please contact our cieTrade support team by phone or email with a list of users and credentials (user IDs and passwords) that you wish to set up.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover bg-center  " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/12/IMG_3760_LG-scaled.jpg.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-32 pt-52">
                    <h1 className="text-6xl text-white font-bold leading-tight">ciePhoto</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Export photos made easy</h1>
                    <div className='py-4'>
                        <a href={'/Bciephoto'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>

            <Container>
                <Row className='py-20'>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/ciephoto-phones.png.webp" className='w-full' /></Col>
                    <Col lg={6}>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Easily capture and manage export container and material quality photos</h6>
                        <div className='flex py-2'><h6 className='text-xl text-gray-500 '><span className='font-bold text-red-600'>ciePhoto </span> replaces your existing digital camera and allows users to take photos of outbound export containers or to document quality issues on received loads. The photos are automatically uploaded into the cieTrade database over any internet connection and attached directly to the appropriate load number, eliminating the time consuming task of manually managing hundreds of photos. ciePhoto can also reduce the number of lost photos since the images are uploaded from the device immediately after they are taken.</h6></div>
                        <div className='flex py-2'>
                            <a href='https://apps.apple.com/us/app/cielocation/id1314428136'> <img src={Appstore} className='w-60' /></a>
                            <a href='https://play.google.com/store/apps/details?id=com.cietradesystems.cieLocation&hl=en_US&gl=US'><img src={Googleplay} className='w-60 ' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-zinc-800 text-center py-5'>
                <i class="fa-solid fa-quote-left text-white bg-red-500 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 leading-tight lg:px-80'>cieDispatch allows our drivers to instantly view their schedules and communicate important details about each pick-up to our back-office. It’s helped us create a seamless scheduling process and improve customer service to our accounts.</h6>
                <h6 className='text-white text-xl '>Mel Tamsiti, Director of Sales Enablement</h6>
                <center><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/dixie-logo-250-x-80-with-white.png.webp" alt="Norkol" className='img-fluid pt-3' /></center>
            </div>
            <Container>
                <Row className='py-12'>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>Takes and Uploads Photos</h6>
                        <div className='py-2'><h6 className='text-lg text-gray-500'>Photos are taken for each inbound trailer or outbound shipping container and are saved with a load or container number. Pictures for each load are then automatically uploaded to a cieTrade cloud where the images are automatically resized and adjusted.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/photo-capture-570-x-570.png.webp" className='w-full' /></Col>
                </Row>
            </Container>
            <Container>
                <Row className='py-12'>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/loads-screen-570-x-570.png.webp" className='w-full' /></Col>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>  Attaches to Load Numbers</h6>
                        <div className=' py-2'><h6 className='text-lg text-gray-500'>Photos are automatically attached to their corresponding worksheet in cieTrade by matching up the container or load number. .</h6></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='py-12'>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl text-black font-bold py-4'>Emails to Customers & Suppliers</h6>
                        <div className='py-2'><h6 className='text-lg text-gray-500'>The image attachments on loads (worksheets) in cieTrade can be emailed to customers along with booking documentation or to suppliers to handle claims</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2024/11/worksheet-ciePhoto.png.webp" className='w-full' /></Col>
                </Row>
            </Container>
            <div className='bg-zinc-800'>
                <Container>
                    <Row className='py-5'>
                        <h1 className='text-4xl font-bold leading-tight text-center text-white pb-5'>Key Features </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '> Eliminates the work involved with manually downloading, editing, and organizing photos into folders.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '> Automatically attaches photos to corresponding shipments by load, container, or scale ticket number.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '> Resizes and time stamps export containers for CCIC customs.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '> Photos can be easily emailed to customers or suppliers with booking documentation.</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '>Easily edit and delete pictures.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '>Helps eliminate lost photos by archiving images on your mobile device.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '>Includes upload history to track photos for a specified period of time.</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-base text-white font-semibold '>Does not require an active Wi-Fi network.</h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='py-24'>
                <h1 className='text-4xl font-bold leading-tight text-center py-2'>Want to see a full list of features? </h1>
                <h1 className='text-4xl font-bold leading-tight text-center text-red-600 '>Download our ciePhoto brochure</h1>
                <div className='py-4'> <center><a href={'/Bciephoto'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </Container>
            <div className='bg-light'>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <h1 className='text-4xl font-bold leading-tight text-center py-4'>Additional Tools</h1>
                            <Col lg={6} >
                                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/self-service-portal.png.webp" className='w-full py-2' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>WEB APPLICATIONS</h1>
                                <h1 className='font-bold  text-3xl py-2'>Self-Service Portal</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s self-service portal gives supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.</h6>
                                <div className='py-3'> <a href={'/SelfServices'} className="text-red-600 font-bold text-base py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={6}>
                                <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/ciedispatch-two-phones-1.png.webp" className='w-4/5' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieDispatch</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieDispatch is a free mobile app that lets your drivers retrieve a list of assigned tickets, get directions to service locations, update job status, record notes, and even capture photos.</h6>
                                <div className='py-3'> <a href={'/Ciedispatch'} className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
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

export default Ciephoto;