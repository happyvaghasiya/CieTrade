import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterP() {
    return (
        <div className='bg-light'>
            {/* <Container>
                <Row className='relative top-60'>
                    <Col lg={12} className=''>
                        <div className="flex flex-col items-center  p-5">
                            <div className="max-w-5xl w-full bg-white shadow-lg  p-14 px-16">
                                <h2 className="text-4xl font-bold text-center text-gray-800">Interested in Learning More?</h2>
                                <p className="text-gray-500 text-center text-lg pt-3">
                                    Learn how cieTrade can meet the unique needs of your trading or recycling business with an<br /> online demonstration tailored to your specific areas of interest.
                                </p>
                                <form className="mt-6 my-5">
                                    <div className="mb-4 text-center">
                                        <label htmlFor="email" className="block text-xl w-1/3 pb-2 font-medium text-gray-700"> Email<span className="text-red-500">*</span></label>
                                        <input type="email" id="email" required className="mt-1 w-3/4 px-3 py-2 border border-red-500 rounded-sm" placeholder="Enter your email" />
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-red-600 me-28 text-white font-medium py-2 px-4 rounded-sm shadow-md hover:bg-red-700">Request Demo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container > */}
            <div className='bg-zinc-900 border-t-8 border-red-600'>
                <Container>
                    {/* <Row className='m-0 pt-60 pb-24'> */}
                    <Row className='m-0 pt-40 pb-24'>
                        <Col lg={2} md={12} className='py-3'>
                            <a href={"/"}><img src="https://www.cietrade.com/wp-content/uploads/2022/12/cietrade_logo.svg" ></img></a>
                        </Col>
                        <Col lg={3} md={12} className='list-none py-3'>
                            <h6 className='text-white font-semibold text-xl'>Solutions</h6>
                            <a href={'/Management'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Dispatch Management</li></a>
                            <a href={'/InventoryManagement'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Inventory Management</li></a>
                            <a href={'/Booking'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Booking and Container Management</li></a>
                            <a href={'/Document'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Document Management</li></a>
                            <a href={'/SelfServices'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Self-Service Portal</li></a>
                            <a href={'/Mobileapps'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Mobile Apps</li></a>
                            <a href={'/Accounting'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Accounting Integration</li></a>
                        </Col>
                        <Col lg={3} md={12} className='list-none py-3'>
                            <h6 className='text-white font-semibold text-xl'>Industries</h6>
                            <a href={'/Agricultural'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Agricultural Commodities</li></a>
                            <a href={'/Commodity'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Commodity Brokerage</li></a>
                            <a href={'/International'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>International Trade</li></a>
                            <a href={'/Merchant'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Paper Merchants</li></a>
                            <a href={'/Recycling'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Plastics Recycling</li></a>
                            <a href={'/Trading'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Pulp & Paper</li></a>
                            <a href={'/Plant'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Recycling Plants</li></a>
                            <a href={'/Scrap'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Scrap Metal Recycling</li></a>
                            <a href={'/Brokerage'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Waste Brokerage</li></a>
                        </Col>
                        <Col lg={2} md={12} className='list-none py-3'>
                            <h6 className='text-white font-semibold text-xl'>Company</h6>
                            <a href={'/Aboutus'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>About Us</li></a>
                            <a href={'/WhyCietrade'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Why cieTrade</li></a>
                            <a href={'/Ourstory'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Our Story</li></a>
                            <a href={'/Contact'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Contact Us</li></a>
                            <a href={'/News'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>News & Events</li></a>
                            <a href={'/Blog'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Blog</li></a>
                            <a href={'/Privacypolicy'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Privacy Policy</li></a>
                            <a href={'/Terms'}> <li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Terms of Service</li></a>
                        </Col>
                        <Col lg={2} md={12} className='list-none py-3'>
                            <h6 className='text-white font-semibold text-xl'>Help Desk</h6>
                            <a href='tel:1-203-323-0074'><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>1-203-323-0074</li></a>
                            <a href={'/SupportLogin'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>cietrade.freshdesk.com</li></a>
                            <a href={'/Trainning'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>Training and Support</li></a>
                            <a href={'/Faqs'}><li className='text-neutral-500 text-lg leading-8 hover:text-red-600'>FAQ</li></a>
                            <a href="https://www.linkedin.com/company/cietrade-systems-inc-/"><i class="fa-brands fa-linkedin text-2xl pt-2 pe-3 hover:text-cyan-600"></i></a>
                            <a href="https://www.youtube.com/user/cieTrade"><i class="fa-brands fa-youtube text-2xl pt-2 hover:text-red-600"></i></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default FooterP;