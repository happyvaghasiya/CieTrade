import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [captchaVerified, setCaptchaVerified] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation
    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "This field is required.";
            }
        });
        if (!captchaVerified) {
            newErrors["captcha"] = "Please verify reCAPTCHA.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    };
    return (
        <div className='bg-light'>
            <div className="relative bg-cover bg-center h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/07/2J3A8907-scaled.jpg.webp')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative pt-60 pb-44">
                    <h1 className="text-6xl text-white text-center font-bold lh-xs">Contact Us</h1>
                </div>
            </div>
            <Container>
                <Row className='py-20'>
                    <Col lg={8} md={8} sm={12}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-900  pb-4">Send Us a Message</h2>
                            <p className="text-gray-600 pb-6 text-lg italic">Are you a current cieTrade client? Click <a href={'/Here'} className="text-red-600 hover:text-gray-800 px-1 font-medium">here</a>to contact our support team.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-bold text-xl pb-2">First name<span className="text-red-600">*</span></label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border rounded-md p-2" />
                                        {errors.firstName && (<p className="text-red-600 text-sm">{errors.firstName}</p>)}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold text-xl pb-2">Last name <span className="text-red-600">*</span></label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border rounded-md p-2" />
                                        {errors.lastName && (<p className="text-red-600 text-sm">{errors.lastName}</p>)}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold text-xl pb-2">Company name <span className="text-red-600">*</span></label>
                                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full border rounded-md p-2" />
                                    {errors.companyName && (<p className="text-red-600 text-sm">{errors.companyName}</p>)}
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-bold text-xl pb-2">Email <span className="text-red-600">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md p-2" />
                                        {errors.email && (<p className="text-red-600 text-sm">{errors.email}</p>)}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold text-xl pb-2">Phone number <span className="text-red-600">*</span></label>
                                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border rounded-md p-2" />
                                        {errors.phoneNumber && (<p className="text-red-600 text-sm">{errors.phoneNumber}</p>)}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold text-xl pb-2">Message <span className="text-red-600">*</span></label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border rounded-md p-2" rows="2"></textarea>
                                    {errors.message && (<p className="text-red-600 text-sm">{errors.message}</p>)}
                                </div>
                                <div class="hs_recaptcha hs-recaptcha field hs-form-field"><div class="input"><div class="grecaptcha-badge" data-style="inline" ><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-dsb6ord88tr" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&amp;k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm&amp;co=aHR0cHM6Ly93d3cuY2lldHJhZGUuY29tOjQ0Mw..&amp;hl=en&amp;v=p09oe8YIFfKgcnqQ9m9k4aiB&amp;size=invisible&amp;badge=inline&amp;cb=94pixmf9s6qw"></iframe></div><div class="grecaptcha-error"></div></div></div></div>
                                <div className="">
                                    <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='lg:ps-5 pt-5'>
                        <h1 className='text-3xl font-bold'>Address</h1>
                        <p className='text-lg py-4 text-gray-500'>15 N. Water St.<br />Norwalk, CT 06854<br />USA</p>
                        <h1 className='text-3xl font-bold'>Phone</h1>
                        <a href='tel:1-203-323-0074'><p className='text-lg py-4 text-gray-500 hover:text-red-600'>+1 (203) 323 0074</p></a>
                        <h1 className='text-3xl font-bold'>Office Hours</h1>
                        <p className='text-lg py-4 text-gray-500'>Monday-Friday 9AM – 6PM EST</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;