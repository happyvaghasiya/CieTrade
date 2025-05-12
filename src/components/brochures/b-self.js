import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Bself() {
    const countryCodes = {
        "India (भारत)": "+91",
        "United States": "+1",
        "United Kingdom": "+44",
        "Canada": "+1",
        "Australia": "+61",
        "Germany": "+49",
        "France": "+33",
        "Japan": "+81",
        "China": "+86",
        "Brazil": "+55",
        "South Africa": "+27",
        "Russia": "+7",
        "Mexico": "+52",
        "Italy": "+39",
        "Spain": "+34",
        "Netherlands": "+31",
        "Sweden": "+46",
        "Norway": "+47",
        "Denmark": "+45",
        "Finland": "+358",
        "Switzerland": "+41",
        "Belgium": "+32",
        "Austria": "+43",
        "New Zealand": "+64",
        "Singapore": "+65",
        "South Korea": "+82",
        "Malaysia": "+60",
        "Thailand": "+66",
        "Indonesia": "+62",
        "Philippines": "+63",
        "Vietnam": "+84",
        "Turkey": "+90",
        "Saudi Arabia": "+966",
        "United Arab Emirates": "+971",
        "Israel": "+972",
        "Egypt": "+20",
        "Nigeria": "+234",
        "Kenya": "+254",
        "Argentina": "+54",
        "Chile": "+56",
        "Colombia": "+57",
        "Peru": "+51",
        "Venezuela": "+58",
        "Pakistan": "+92",
        "Bangladesh": "+880",
        "Sri Lanka": "+94",
        "Nepal": "+977",
        "Afghanistan": "+93",
        "Iraq": "+964",
        "Iran": "+98",
        "Syria": "+963",
        "Jordan": "+962",
        "Lebanon": "+961",
        "Kuwait": "+965",
        "Qatar": "+974",
        "Bahrain": "+973",
        "Oman": "+968",
        "Yemen": "+967",
        "Morocco": "+212",
        "Algeria": "+213",
        "Tunisia": "+216",
        "Libya": "+218",
        "Sudan": "+249",
        "Ethiopia": "+251",
        "Ghana": "+233",
        "Uganda": "+256",
        "Tanzania": "+255",
        "Zambia": "+260",
        "Zimbabwe": "+263",
        "Botswana": "+267",
        "Namibia": "+264",
        "Mozambique": "+258",
        "Angola": "+244",
        "Cameroon": "+237",
        "Ivory Coast": "+225",
        "Senegal": "+221",
        "Mali": "+223",
        "Burkina Faso": "+226",
        "Niger": "+227",
        "Chad": "+235",
        "Mauritania": "+222",
        "Somalia": "+252",
        "Madagascar": "+261",
        "Malawi": "+265",
        "Lesotho": "+266",
        "Swaziland": "+268",
        "Seychelles": "+248",
        "Mauritius": "+230",
        "Comoros": "+269",
        "Cape Verde": "+238",
        "Sao Tome and Principe": "+239",
        "Equatorial Guinea": "+240",
        "Gabon": "+241",
        "Congo": "+242",
        "Central African Republic": "+236",
        "South Sudan": "+211",
        "Eritrea": "+291",
        "Djibouti": "+253",
        "Rwanda": "+250",
        "Burundi": "+257",
        "Benin": "+229",
        "Togo": "+228",
        "Sierra Leone": "+232",
        "Liberia": "+231",
        "Guinea": "+224",
        "Guinea-Bissau": "+245",
        "Gambia": "+220"
    };
    const [selectedCountry, setSelectedCountry] = useState("India (भारत)");
    const [phoneCode, setPhoneCode] = useState(countryCodes[selectedCountry]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleCountryChange = (event) => {
        const selected = event.target.value;
        setSelectedCountry(selected);
        setPhoneCode(countryCodes[selected]);
    };
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
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div>
            <div className="relative bg-cover bg-center h-full" style={{ backgroundImage: `url('https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/05/Mask-Group-30.jpg.webp')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative pt-56 pb-44">
                    <h1 className="text-6xl pb-3 text-white text-center font-bold lh-xs">Download Our Brochure</h1>
                    <p className="text-xl text-white text-center">Looking to learn about our software features in more detail?</p>
                </div>
            </div>

            <Container>
                <Row className='py-20'>
                    <Col lg={6} md={12} sm={12} className=''>
                        <h1 className='text-4xl font-bold'>Download our self-service portal brochure</h1>
                        <p className='text-lg py-4 text-gray-500'>Fill in your information to receive an email with a full list of features to read at your convenience.</p>
                        <img src="https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2022/11/solution-sheet-download-self-service-portal-1.png.webp" alt="sheet" />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="max-w-4xl mx-auto bg-white"><form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-bold text-xl pb-2">First name<span className="text-red-500">*</span></label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border rounded-md p-2 focus:ring-2" />
                                {errors.firstName && (<p className="text-red-500 text-sm">{errors.firstName}</p>)}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold text-xl pb-2">Last name <span className="text-red-500">*</span></label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border rounded-md p-2 focus:ring-2" />
                                {errors.lastName && (<p className="text-red-500 text-sm">{errors.lastName}</p>)}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold text-xl pb-2">Company name <span className="text-red-500">*</span></label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full border rounded-md p-2 focus:ring-2" />
                                {errors.companyName && (<p className="text-red-500 text-sm">{errors.companyName}</p>)}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold text-xl pb-2">Company Website URL <span className="text-red-500">*</span></label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full border rounded-md p-2 focus:ring-2" />
                                {errors.companyName && (<p className="text-red-500 text-sm">{errors.companyName}</p>)}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold text-xl pb-2">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md p-2 focus:ring-2" />
                                {errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold text-xl pb-2">Phone number <span className="text-red-500">*</span></label>
                                <div className="d-flex justify-around">
                                    <select
                                        className="block w-2/3 me-4 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-2 rounded-l focus:outline-none"
                                        id="country-code"
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                    >
                                        {Object.keys(countryCodes).map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                    <input
                                        className="w-1/4 bg-gray-100 text-gray-700 border border-gray-300 py-2 px-2 focus:outline-none"
                                        id="phone-code"
                                        type="text"
                                        value={phoneCode}
                                        readOnly
                                    />
                                    <input
                                        className="w-2/3 bg-gray-100 text-gray-700 border border-gray-300 rounded-r py-2 px-4 focus:outline-none"
                                        id="phone-number"
                                        type="text"
                                        placeholder="Enter phone number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="hs_recaptcha hs-recaptcha field hs-form-field"><div class="input"><div class="grecaptcha-badge" data-style="inline" ><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-dsb6ord88tr" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&amp;k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm&amp;co=aHR0cHM6Ly93d3cuY2lldHJhZGUuY29tOjQ0Mw..&amp;hl=en&amp;v=p09oe8YIFfKgcnqQ9m9k4aiB&amp;size=invisible&amp;badge=inline&amp;cb=94pixmf9s6qw"></iframe></div><div class="grecaptcha-error"></div></div></div></div>
                            <div className="">
                                <button type="submit" className="bg-red-600 text-white mt-2 px-6 py-2 font-semibold hover:bg-red-700 transition">Submit</button>
                            </div>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bself;