import React, { useState } from "react";

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How much does cieTrade cost?",
            answer: "A base subscription for our cloud solution starts at just $675 USD per month for 3 concurrent users. Subscriptions with more than 3 concurrent users may qualify for volume discounts. Please contact our sales team to request a custom quote for your subscription.",
        },
        {
            question: "Does cieTrade offer a software trial?",
            answer: "cieTrade currently does not offer free trials as the initial account set-up (master data upload, training, document branding, etc.) is critical to a user’s navigation of the system. Please contact our sales team if you are interested in arranging a hands-on demo of the software.",
        },
        {
            question: "Does cieTrade offer subscription tiers?",
            answer: "cieTrade does not restrict its solutions by tiers. All of cieTrade’s core features (minus custom reports and customizations) including onboarding, training, and support are currently included in your subscription whether you are a small-medium sized team or enterprise account.",
        },
        {
            question: "Does cieTrade integrate with my accounting software?",
            answer: "cieTrade provides direct integration with popular accounting software including Intuit QuickBooks, Xero, and Microsoft Dynamics. Please visit our Accounting Page to learn more.",
        },
        {
            question: "Does cieTrade offer mobile applications that work with the software?",
            answer: "Yes, cieTrade offers a full suite of mobile applications designed to seamlessly integrate with your cieTrade account and provide you and your team access from anywhere. Please visit our Mobile Apps page to learn more."
        },
        {
            question: "Is there a minimum subscription length or contract?",
            answer: "No, cieTrade is a month-to-month software service. There is no minimum subscription length or contract associated with your account. We do recommend a 6 month commitment in order to move past the onboarding and training portion to see the benefits of the system, but you are not contractually required to stay for that duration.",
        },
        {
            question: "Does cieTrade support scale integration?",
            answer: "Yes, cieTrade offers direct integration with floor, truck, and forklift scales to pull scaled material weights directly into the system. This feature only works with scales that have an IP Address. Please contact our sales team to learn more about our scale integration feature.",
        },
        {
            question: "Can I have multiple companies or locations on one account?",
            answer: "Yes, clients operating multiple companies, locations, branches, or departments are fully supported within cieTrade. Assistance is provided during your account set-up call following activation.",
        },
        {
            question: "Can I restrict information for certain users?",
            answer: "cieTrade provides specialized controls for user roles and permissions that can be quickly modified by the account administrator(s). Assistance is provided during your account set-up call following activation..",
        },
        {
            question: "What does cieTrade need from clients prior to go-live?",
            answer: "Items such as copies of your documents and barcode labels, products and counterparties lists, and company logo will be needed to properly set up your cieTrade account. During the training process, our onboarding team will provide a list of any additional items that are required prior to your go-live date."
        },
        {
            question: "How soon can I be up and running within cieTrade?",
            answer: "The training and implementation process typically takes around 4-6 weeks on average and depends on several factors such as how quickly our onboarding team receives your master data and your team’s availability for training sessions.",
        },
        {
            question: "How secure is cieTrade's cloud software?",
            answer: "cieTrade takes extensive measures to ensure our clients’ data is secure. We have vast firewall restrictions, anti-spam and anti-virus programs in place, and run multiple daily backups in addition to several other detailed measures. Please contact our support team if you would like more information about our technical security measures."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="h-full relative bg-cover" style={{ backgroundImage: `url(https://www.cietrade.com/wp-content/webp-express/webp-images/uploads/2023/02/2023-02-14_17h47_28.png.webp)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="text-center relative pb-40 pt-56">
                    <h1 className="text-6xl text-white font-bold leading-tight">Frequently Asked Questions</h1>
                    <h1 className="text-xl text-white py-3 leading-tight">Find answers to some common questions about cieTrade</h1>
                </div>

            </div>
            <div className='bg-light py-5 '>
                <div className="max-w-6xl mx-auto p-4 ">
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
export default Faqs;
