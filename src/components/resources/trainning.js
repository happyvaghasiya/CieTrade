import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Office from '../../assets/img/office.png';
import Lady1 from '../../assets/img/lady1.webp';
import Lady2 from '../../assets/img/lady2.jpg';
import Lady3 from '../../assets/img/lady3jpg.webp';
import Lady4 from '../../assets/img/lady4.png';


function Trainning() {
    const data = {
        Supportteam: [
            { img: Lady1, name: "Brittnee Kindzierski", work: "Support Analyst" },
            { img: Lady4, name: "Andrew Dempsey", work: "Support Analyst" },
            { img: Lady2, name: "Pamela Prado", work: "Support Analyst (LATAM)" },
            { img: Lady3, name: "Melanie Sivo", work: "Support Analyst & Onboarding Specialist" },

        ],
    }
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "What are some common roadblocks during the implementation process?",
            answer: "cieTrade’s team works diligently with you to make the transition to our software as seamless as possible. A few common roadblocks that we have come across include clients dedicating insufficient time to training sessions, resistance to change from a client’s employees, and workflow miscommunication.",
        },
        {
            question: "How much support do I receive after we go-live?",
            answer: "For the first week after your go-live date, our support team aims to be flexible to your schedule and business hours to address immediate questions as you begin to operate within cieTrade. While our support team continues to be available via email, phone, or video conference, we’ve found that clients typically require less frequent support following the first week after they are live in the system.",
        },
        {
            question: "How quickly do you respond to minor or critical bugs?",
            answer: "If you email the general support email, everyone on the support team will see it. All emails are responded to within a business day, but typically within minutes to an hour.",
        },
        {
            question: "How often are updates done and what is the downtime?",
            answer: "Updates are run after hours (around 9-10pm EST) so our clients are not affected. We aim to do 1-2 updates per month, depending on pressing requests or development for clients.",
        },
        {
            question: "Do I have an appointed project manager?",
            answer: "Our support team works hand in hand with our sales team so that the new client hand off is seamless. Everyone on the support team will know about your company, have a copy of your workflow and access to your up-to-date development and reports so that no matter who answers your ticket or call, they can help you."
        },
        {
            question: "Will I receive a live person when I call in?",
            answer: "Yes, as long as you call within normal office hours, Monday – Friday 9:00AM to 6:00PM ET, a support team member is here. We can also arrange non business-hour meetings upon request if you are located internationally.",
        },

    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/03/support-team-at-desks-blur.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">Training & Support</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Let us help you be successful</h1>
                </div>

            </div>

            <Container>
                <Row className='py-20'>
                    <Col lg={6}><img src={Office} className='w-full h-5/6'></img></Col>
                    <Col lg={6} className='lg:px-5 text-lg'>
                        <h6 className='text-3xl font-bold pb-3'>Help when you need it</h6>
                        <h6 className='text-gray-500 py-3'>We provide a comprehensive package of professional services, training and support options with one thing in mind— your success. Our support team brings a wealth of experience and best practices from the trading, waste and recycling industries to quickly get you up and running and help ensure that you get continuous value from your investment in cieTrade.</h6>
                        <h6 className='text-gray-500 font-bold pt-3'>Join a Support Session</h6>
                        <h6 className='text-red-600 text-xl pb-3'><a href='https://join.zoho.com/'>join.zoho.com</a></h6>
                        <h6 className='text-gray-500 font-bold pt-3'>Email us a Question</h6>
                        <h6 className='text-red-600 text-xl pb-3'><a href='https://www.cietrade.com/training-support-contact-us/'>Contact Us</a></h6>
                        <h6 className='text-gray-500 font-bold pt-3'>Call our Support Team</h6>
                        <h6 className='text-red-600 text-xl pb-3'>203-323-0074</h6>
                        <h6 className='text-gray-500 font-bold'>Open Monday – Friday 9:00AM – 6:00PM ET.</h6>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h1 className="text-5xl text-center font-bold leading-tight">Meet Our Support Team</h1>
                    {data.Supportteam.map((item, index) => (
                        <Col lg={3} key={index} className='py-20 px-10'>
                            <img src={item.img} className='h-56 w-full'></img>
                            <div className="ps-3">
                                <h6 className='text-xl text-gray-500 font-bold pt-3'>{item.name}</h6>
                                <h6 className='text-gray-500 pt-2 pb-3'>{item.work}</h6>
                                <a href='https://www.linkedin.com/in/brittneekindzierski/'> <i class="fa-brands fa-linkedin text-blue-500 text-2xl"></i></a>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>

            <div className='bg-light'>
                <Container>
                    <Row className='py-20'>
                        <Col lg={6}>
                            <h6 className='text-4xl font-bold py-3'>Online & Onsite Training</h6>
                            <div className='py-2'><h6 className='text-lg text-gray-600'>Our online training programs are tailored to the specific needs of your business and are packed with live demonstrations, participant interactivity, reinforcement discussions and hands-on exercises to jump-start your team’s performance and drive results. On-site training services are also available upon request for a professional service fee to ramp up your training sessions and educate your user community.</h6></div>
                        </Col>
                        <Col lg={6}>
                            <h6 className='text-4xl font-bold py-3'>Dedicated Support Team</h6>
                            <div className='py-2'><h6 className='text-lg text-gray-600 '>Each cieTrade client is setup with their own support team members that are knowledgeable about their account and help oversee and prioritize cases and conduct training. cieTrade clients also receive unlimited access to our knowledge base to quickly access help articles and answer questions.</h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='bg-zinc-800'>
                <Container >
                    <Row className='py-16'>
                        <h1 className='text-4xl font-bold lh-base text-center text-white pb-5'>Support Portal Features</h1>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Search the knowledgebase and watch step by step training videos</h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '> Create cases for support requests and track ticket status</h6></div>
                        </Col>
                        <Col lg={6}>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Access FAQ and read instructional help articles </h6></div>
                            <div className='flex py-3'><i class="fa-solid fa-check text-red-600 font-extrabold text-2xl pe-3"></i><h6 className='text-lg text-white font-semibold '>Obtain the latest release notes and announcements </h6></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-light py-5'>
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
export default Trainning;