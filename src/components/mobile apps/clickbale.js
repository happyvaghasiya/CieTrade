import { Row, Col, Container } from 'react-bootstrap';
import { useState } from "react";
import Bale from '../../assets/img/bale.png';
import Appstore from '../../assets/img/appstore.png';
import Googleplay from '../../assets/img/googleplay.png';
import Evergreen from '../../assets/img/evergreen.png';
import Bale2 from '../../assets/img/bale2.png';
import Bale3 from '../../assets/img/bale3.png';
import Bale4 from '../../assets/img/bale4.png';
import Selfservice from '../../assets/img/self-service.png';
import Bale5 from '../../assets/img/bale5.png';

// import YouTube from 'react-youtube';

function Clickbale() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Does clickBale provide real-time information from my cieTrade account?",
            answer: "Yes, since clickBale is fully integrated with your cieTrade account, your data is automatically synced and you can view real-time, up to date information directly from your mobile device.",
        },
        {
            question: "Can I print barcode labels from the app?",
            answer: "Yes, with clickBale, barcode labels can be easily printed to mobile Bluetooth printer directly from your warehouse floor or scrap yard.",
        },
        {
            question: "Can I edit my bale inventory from clickBale?",
            answer: "Yes, using clickBale, corrections can be made from your mobile phone or you can view and adjust bale inventory directly from within your cieTrade account.",
        },
        {
            question: "Is my business information stored on my phone?",
            answer: "No, clickBale safeguards your business data and never stores business information on your mobile device.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover bg-center  " style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/08/2022-08-04_10h14_47.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">clickBale</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Keep track of your baled inventory directly from the warehouse or scrap yard</h1>
                    <div className='my-5'>
                        <a href={'/Bclickbale'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a>
                    </div>
                </div>
            </div>
            <Container>
                <Row className='py-20'>
                    <Col lg={6}><img src={Bale} className='w-full' /></Col>
                    <Col lg={6} className='content-centerpy-10'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Know what's on your warehouse or scrap yard floor</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '><span className='font-bold text-red-600'>clickbale</span> is a mobile app that lets you easily manage your scrap bale production and inventory. Each bale that’s received or produced can be quickly captured or even tagged with a barcode label created from a mobile printer. Outbound Bales can be scanned or tallied with an average weight while it’s tracking total load weight. A live Inventory report shows you what grades of material you have on hand including total weight and bale count and a recent transaction history. Corrections can be made from your mobile phone or you can view and adjust bale inventory directly from within cieTrade.</h6></div>
                        <div className='flex py-2'>
                            <a href='https://apps.apple.com/us/app/cielocation/id1314428136'> <img src={Appstore} className='w-60' /></a>
                            <a href='https://play.google.com/store/apps/details?id=com.cietradesystems.cieLocation&hl=en_US&gl=US'><img src={Googleplay} className='w-60 ' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-zinc-800 text-center py-5'>
                <i class="fa-solid fa-quote-left text-white bg-red-500 p-1 rounded-full px-2 text-2xl"></i>
                <h6 className='text-white text-xl py-3 leading-tight lg:px-80'>cieTrade has proven essential in helping us manage and control our inventory including both warehouse sales and direct shipments across multiple locations. Its visibility into valuations and cost of sales has been a key benefit to improve decision making and avoid losses while their mobile apps have really helped elevate the effectiveness of our warehouse.</h6>
                <h6 className='text-white text-xl '>Al Gerrard, Director of Operations</h6>
                <center><img src={Evergreen} alt="Norkol" className='img-fluid pt-2' /></center>
            </div>

            <Container>
                <Row className='py-5'>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Provides an Instant Floor Report</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '>Eliminates time spent with manual counts or paper tally sheets by providing a real-time position report on bale counts, total bale weights and average weights for every grade in each warehouse or yard.</h6></div>
                    </Col>
                    <Col lg={6}><img src={Bale2} className='w-full' /></Col>
                </Row>
            </Container>
            <Container>
                <Row className='py-5'>
                    <Col lg={6}><img src={Bale3} className='w-full' /></Col>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Quickly Creates Bale Tags</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '>Specialized tags provide a readable barcode weight and other references to help identify bales received or produced and can be easily printed from a mobile Bluetooth printer directly from your warehouse floor or scrap yard.</h6></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='py-5'>
                    <Col lg={6} className='content-center'>
                        <h6 className='text-4xl font-bold py-3 lh-sm'>Helps Check Load Weights</h6>
                        <div className='py-2'><h6 className='text-xl text-gray-500 '>As material is loaded for shipping, bale weights can be instantly scanned with your mobile phone to track total load weight and help avoid exceeding maximum trailer weights. Bale counts and grades can also be automatically transferred to outbound cieTrade loads.</h6></div>
                    </Col>
                    <Col lg={6}><img src={Bale4} className='w-full' /></Col>
                </Row>
            </Container>
            <div className='bg-zinc-800'>
                <Container >
                    <Row className='py-5'>
                        <h1 className='text-4xl font-bold leading-tight text-center text-white py-4'>Key Features </h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Eliminates time spent with manual counts or paper tally sheets</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Provides a real-time position report on bale counts, total bale weights and average weights for every grade in each warehouse or yard</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Creates specialized bale tags with a readable barcode weight and other references to help identify bales received or produced</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Allows you to easily print labels from a mobile Bluetooth printer directly from your warehouse floor or scrap yard</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Allows you to instantly scan bale weights with your mobile phone to track total load weight and help avoid exceeding maximum trailer weights</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Allows you to automatically transfer bale counts and grades to outbound cieTrade loads</h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='py-24'>
                <h1 className='text-4xl font-bold leading-tight text-center py-2'>Want to see a full list of features? </h1>
                <h1 className='text-4xl font-bold leading-tight text-center text-red-600 '>Download our clickBale brochure</h1>
                <div className='py-4'> <center><a href={'/Bclickbale'} className="text-white bg-red-600 hover:bg-red-700 px-4 py-3  font-bold text-base ">Download Brochure<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </Container>
            <div className='bg-light'>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <h1 className='text-4xl font-bold leading-tight text-center py-4'>Additional Tools</h1>
                            <Col lg={6} >
                                <img src={Selfservice} className='w-full h-80 py-2' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>WEB APPLICATIONS</h1>
                                <h1 className='font-bold  text-3xl py-2'>Self-Service Portal</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s self-service portal gives supply chain partners 24/7 on-demand access and visibility to recovered material, pricing, shipments, payments, documents and more.</h6>
                                <div className='py-3'> <a href={'/Selfservices'} className="text-red-600 font-bold text-base py-1 ">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
                            </Col>
                            <Col lg={6}>
                                <img src={Bale5} className='w-full h-80' />
                                <h1 className='font-bold text-red-600 text-xl pt-3'>MOBILE APPS</h1>
                                <h1 className='font-bold  text-3xl py-2'>cieMobile</h1>
                                <h6 className='text-gray-600 text-lg py-3'>cieTrade’s mobile app for Apple mobile devices provides sales reps and managers with real-time access to cieTrade® account information and key management</h6>
                                <div className='py-3'> <a href={'/Ciemobile'} className="text-red-600 font-bold lg:text-base md:text-center sm:text-center">Learn More<i class="fa-solid fa-arrow-right text-white bg-red-600 text-sm px-1 rounded-3xl ms-2"></i></a></div>
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

export default Clickbale;