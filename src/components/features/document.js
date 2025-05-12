import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from "react";
import mobile1 from '../../assets/img/mobile3.webp';
import mobile2 from '../../assets/img/mobile2.webp';
function Document() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "I have specialized documents. Will cieTrade have all the document types I require?",
            answer: "cieTrade has over a hundred documents out of the box, designed for each industry’s specific requirements. However, if there is a document you require, your company can work with the support team to determine how to bring it into the system. (Note this may be subject to professional development hours or covered by your MSA.)",
        },
        {
            question: "Can cieTrade send system generated documents directly out of the platform or do I need to download and attach them to an email like I do today?",
            answer: "cieTrade will generate and send all of your documents, photos and related attachments to your customer or supplier directly out of the system. It will also track which user sent the email, to which contacts the email was sent, and provide a date and time stamp confirmation that the email cleared our server.",
        },
        {
            question: "I frequently send documents that need to be signed by a customer or supplier and returned to me. How can cieTrade support that process?",
            answer: "Yes, cieTrade’s document management tools support automatically applied internal signatures as well as Docusign fields to have your supply chain partners sign and return back to you via email.",
        },
        {
            question: "Can cieTrade track when my customer opens their documents?",
            answer: "cieTrade can track when your customer opens their invoice document. This feature helps your AR team establish which customers need to followed up with.",
        },
        {
            question: "My business has a documents team. How can cieTrade make document management more efficient?",
            answer: "By leveraging cieTrade, your team won’t have to manually create any documents. cieTrade generates each of your required documents within the system at the click of a button. Since all transactions and loads have built in validity checks, you can ensure that the data pulled onto your documents is complete and correct.",
        },
        {
            question: "How can cieTrade's document management tools ensure that I am raising and sending my export documents in a timely manner?",
            answer: "cieTrade’s document tracking feature allows you to create document workflows and use them as a system checklist to ensure you and your team are sending out the correct documents and recording the returned information such as CIC numbers.",
        },
    ];

    const data = {
        Tool: [
            { img: mobile1, head: "MOBILE APPS", title: "cieLocation", p: "cieTrade’s inventory scanning app helps your warehouse quickly check and edit inventory, confirm inventory availability and minimize time spent with stock and cycle counts.", id: "Cielocationn" },
            { img: mobile2, head: "MOBILE APPS", title: "cieMobile", p: "cieTrade’s mobile reporting app provides sales reps and managers with real-time access to cieTrade account information and key management reports from the road or anywhere else.", id: "Ciemobile" },
        ],
    };
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='text-white'>
            <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/2025-01-10_14h36_59.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56  ">
                    <h1 className="text-6xl font-bold leading-tight">Document Management</h1>
                    <h1 className="text-xl py-3 leading-tight">Document management software for recyclers and traders</h1>
                </div>
            </div>

            <div className='px-4'>
                <Row className='py-12'>
                    <Col lg={6} md={12}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/packing-list-on-screen-3.png.webp" alt="booking" className='img-fluid' /></Col>
                    <Col lg={6} md={12} className=''>
                        <h1 className='text-4xl font-bold text-black leading-tight'>Generate and manage all of your specialized shipping and billing documents</h1>
                        <h6 className='text-gray-500 lg:text-lg pb-5 pt-3'>cieTrade’s document management tools help recyclers, domestic brokers and exporters save time, improve organization and reduce double-entry while providing easier access to critical files and eliminating manual document templates. From instantly generating specialized shipping and billing forms and staying on top of all the necessary paperwork for your shipments to sharing documents, photos and other file attachments directly with your supply-chain partners, cieTrade offers a comprehensive, industry-specific solution that supports the unique demands of your business.</h6>
                        <a href={'/Requestdemo'} className="bg-red-600 hover:bg-red-700 p-3 font-bold">Request Demo<i class="fa-solid fa-arrow-right ps-1 pt-1 "></i></a>
                    </Col>
                </Row>
            </div>

            <div className='bg-zinc-800 py-5'>
                <h1 className='text-4xl font-bold lh-tight text-center'>How cieTrade helps you manage documents more efficiently</h1>
                <Row className='g-0 px-4'>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div><i class="fa-solid fa-file-invoice text-red-600 text-5xl py-2"></i>
                            <h1 className='text-3xl font-bold py-3'>Generate specialized documents</h1>
                            <h1 className='text-xl'>Save time by instantly generating your shipping and billing documents and eliminating the need to manually fill in forms or templates.</h1>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div><i class="fa-solid fa-envelope text-red-600 text-5xl py-2"></i>
                            <h1 className='text-3xl font-bold py-3'>Easily send documents & photos</h1>
                            <h1 className='text-xl'>Quickly share documents and photos with your customers and supply-chain partners directly from cieTrade using customizable email templates.</h1>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div>
                            <i class="fa-solid fa-laptop text-red-600 text-5xl py-2"> </i>
                            <h1 className='text-3xl font-bold py-3'>Improve access and organization</h1>
                            <h1 className='text-xl'>Instantly retrieve any document or attachment related to your orders and shipments, reducing the use of physical file folders.</h1>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pe-4 py-4'>
                        <div><i class="fa-solid fa-tasks text-red-600 text-5xl py-2"></i>
                            <h1 className='text-3xl font-bold py-3'>Track document requirements</h1>
                            <h1 className='text-xl'>Minimize risk and ensure compliance by staying on top of the necessary documents and filings for all of your export shipments.</h1>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='px-3'>
                <Row className='g-0 py-12'>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-4xl text-black font-bold py-4'>Shipping & Billing Documents</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Instantly generate specialized billing, inland or ocean transport documents including packing lists, bills of lading, confirmations, freight and shipping instructions, certificates, settlement statements and more.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Custom brand any shipping and billing document with your company’s logo, address, payment terms and instructions, signature and more.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Group together multiple documents into a “document batch”, creating a single PDF that makes it easier to share all of your required documentation in one file.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/shipping-billing-documents-1.png.webp" className=''></img></Col>
                </Row>
                <Row className='g-0 py-12'>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/email-messages-templates-1.png.webp" className=''></img></Col>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-4xl text-black font-bold py-4'>Email Messages & Templates</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Easily send any document directly from your cieTrade account, eliminating the need to download, attach and send the documents from an external email client.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Seamless Docusign integration captures electronic signatures on any document sent out of cieTrade and makes it easier to save signed documents back in your account.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Automate your email message content using fully-customizable, one-click email templates that help save time and minimize manual entry.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Instantly receive a date and time stamp on any document that was sent out of cieTrade for proof of delivery and dispute resolution.</h6></div>
                    </Col>
                </Row>
                <Row className='g-0 py-12'>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-4xl text-black font-bold py-4'>Document & Attachment Retrieval</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Upload external documents, images and file attachments and automatically associate them to their originating transactions or order forms, helping you improve organization and reduce the number of lost files.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Safely back up and store all of your documents and related attachments within cieTrade while ensuring quick and easy access to your files.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Universal system search bar allows you to instantly retrieve any document or attachment— including container photos, scale tickets and more— using any reference number related to the transaction or order.</h6></div>
                    </Col>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/document-attachment-retrieval-1.png.webp" className=''></img></Col>
                </Row>
                <Row className='g-0 py-12'>
                    <Col lg={6}><img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2025/01/document-tracking.png.webp" className=''></img></Col>
                    <Col lg={6} className='py-12'>
                        <h6 className='text-4xl text-black font-bold py-4'>Document Tracking</h6>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Specify documents that need to be prepared and filed for certain transactions that have complex requirements, such as international shipments.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Set up custom events and group them together in a sequence to create a document set that can be linked to any transaction or shipment.</h6></div>
                        <div className='flex py-2'><i class="fa-solid fa-check text-red-600 font-extrabold text-xl pe-3"></i><h6 className='text-lg text-gray-500'>Easily track the completion of each document event, helping to minimize risk and ensure document compliance.</h6></div>
                    </Col>
                </Row>
            </div>

            <div className='bg-zinc-800 py-12'>
                <h1 className='text-4xl font-bold lh-tight lg:px-60 text-center'>Learn how cieTrade can help you improve make document management easier</h1>
                <div className='pt-5'><center><a href={'/Binventory'} className="bg-red-600 hover:bg-red-700 p-3 font-bold text-tight ">Request Demo<i class="fa-solid fa-arrow-right ps-3 pt-1"></i></a></center></div>
            </div>

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
            <div className='bg-light py-5'>
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
export default Document;