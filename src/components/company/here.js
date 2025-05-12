import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Here() {
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
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/03/support-team-at-desks-blur.png.webp')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative pt-64 pb-44">
                    <h1 className="text-6xl text-white text-center font-bold lh-xs">Contact our Support Team</h1>
                </div>
            </div>
            <Container>
                <Row className='py-20'>
                    <div className="text-gray-600">
                        <h2 className="text-5xl font-bold text-gray-900 leading-snug pb-4 lg:pe-72">Have a question for our support team? Send us a message below.</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-zinc-500 font-bold text-lg pb-1">Which version of cieTrade are you using?<span className="text-red-600">*</span></label>
                                <select name="form_fields[field_60f75ec]" id="form-field-field_60f75ec" className="elementor-field-textual elementor-size-sm w-full py-2 border rounded ps-1" required="required" data-gtm-form-interact-field-id="0">
                                    <option value="cieTrade Desktop">cieTrade Desktop</option>
                                    <option value="cieTrade.net (Cloud)">cieTrade.net (Cloud)</option>
                                </select>
                                {errors.companyName && (<p className="text-red-600 text-sm">{errors.companyName}</p>)}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-zinc-500 font-bold text-lg pb-1">Your First<span className="text-red-600">*</span></label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border rounded-md p-2" />
                                    {errors.firstName && (<p className="text-red-600 text-sm">{errors.firstName}</p>)}
                                </div>
                                <div>
                                    <label className="block text-zinc-500 font-bold text-lg pb-1">Your Company <span className="text-red-600">*</span></label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border rounded-md p-2" />
                                    {errors.lastName && (<p className="text-red-600 text-sm">{errors.lastName}</p>)}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-zinc-500 font-bold text-lg pb-1">Work Email <span className="text-red-600">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md p-2" />
                                    {errors.email && (<p className="text-red-600 text-sm">{errors.email}</p>)}
                                </div>
                                <div>
                                    <label className="block text-zinc-500 font-bold text-lg pb-1">Phone number <span className="text-red-600">*</span></label>
                                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border rounded-md p-2" />
                                    {errors.phoneNumber && (<p className="text-red-600 text-sm">{errors.phoneNumber}</p>)}
                                </div>
                            </div>
                            <div>
                                <label className="block text-zinc-500 font-bold text-lg pb-1">Your Message <span className="text-red-600">*</span></label>
                                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border rounded-md p-2" rows="2"></textarea>
                                {errors.message && (<p className="text-red-600 text-sm">{errors.message}</p>)}
                            </div>
                            <div class="elementor-field-type-recaptcha elementor-field-group elementor-column elementor-field-group-recaptcha elementor-col-100">
                                <div class="elementor-field" id="form-field-recaptcha"><div class="elementor-g-recaptcha" data-sitekey="6Ld27UIjAAAAAOB6Z-Hf-uwu8NAUL6ZATkX-ccvb" data-type="v2_checkbox" data-theme="light" data-size="normal"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-77cimnz98hai" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ld27UIjAAAAAOB6Z-Hf-uwu8NAUL6ZATkX-ccvb&amp;co=aHR0cHM6Ly93d3cuY2lldHJhZGUuY29tOjQ0Mw..&amp;hl=en-GB&amp;type=v2_checkbox&amp;v=PcIQSvk4Y5ANjYUx0f4froA1&amp;theme=light&amp;size=normal&amp;cb=mdd9hp4fqjea"></iframe></div></div></div></div><div className="">
                                <button type="submit" className="bg-red-600 text-white px-32 py-3 rounded font-semibold hover:bg-red-700 transition">Submit</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </div >
    );
};

export default Here;