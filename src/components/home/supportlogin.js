import React, { useState } from "react";
import { Container } from "react-bootstrap";
import headphones from "../../assets/img/headphones.png";

function SupportLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <div className="bg-light">
            <h1 className="bg-black">.<br />.<br />.<br />.<br />.</h1>
            <Container className="w-full mx-auto justify-center py-5 lg:px-20 md:px-0 sm:px-0">
                <div className="bg-red-600 rounded px-3">
                    <div className="flex justify-between">
                        <div className="px-2 py-2"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/4255203/logo/cieTradeLogo_red.bmp"></img></div>
                        <div className="px-4 pt-3 text-end text-white"><h1>Welcome</h1><a href="#"><h1 className="hover:underline font-medium">Login</h1></a></div>
                    </div>
                    <a href="#"><h1 className="ps-4 py-2 text-white border-t">Home</h1></a>
                </div>
                <div className="p-3 bg-gray-100 lg:w-2/3 my-3 rounded">
                    {isForgotPassword ? (
                        <div className="w-2/3">
                            <h3 className="text-xl text-start text-gray-600 font-semibold py-2">Forgot Password</h3>
                            <p className="text-sm text-gray-600 text-start pb-4"> Give us your email address and instructions to reset your password will be emailed to you.</p>
                            <input type="email" placeholder="Your e-mail address" className="w-full p-3 mb-3 border rounded" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <div className="flex justify-between">
                                <button onClick={() => setIsForgotPassword(false)} type="button" className="mt-3 text-start btn btn-light">Cancel</button>
                                <button type="button" className="btn btn-secondary text-sm mt-3"> Reset my password</button>
                            </div>
                        </div>
                    ) : (
                        <div className="lg:w-2/3">
                            <h1 className="text-xl font-bold">Login to the support portal</h1>
                            <p className="text-sm">Enter the details below</p>
                            <input type="email" placeholder="Email" className="mt-3 w-2/3 px-3 py-2 border rounded focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <div className="relative w-2/3">
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-3 px-3 py-2 w-full border rounded focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 " />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-6 top-2.5 text-blue-500 hover:text-blue-700 focus:outline-none">{showPassword ? "🐵" : "🙈"}</button>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />Remember me on this computer
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
                                <button onClick={() => setIsForgotPassword(true)} className="py-3 text-sm text-blue-600 hover:text-blue-800 hover:underline">Forgot your password?</button>
                                <button type="button" className="btn btn-secondary text-sm">Login</button>
                            </div>
                            <div className="flex pt-3 border-t">
                                <img src={headphones} alt="" className="w-10 border rounded-full p-2 bg-white" />
                                <h1 className="text-xl font-semibold pt-1 px-3">Are you an agent?</h1>
                                <a href="https://cietrade.freshworks.com/login?client_id=451979510707337272&redirect_uri=https%3A%2F%2Fcietrade.freshdesk.com%2Ffreshid%2Fauthorize_callback%3Fhd%3Dhttps%3A%2F%2Fcietrade.freshdesk.com" className="font-semibold text-xl pt-1 text-emerald-700">Login here</a>
                            </div>
                        </div>
                    )}
                </div>
                <a href="#"><div className="bg-zinc-500"><h2 className="text-sm text-gray-300 p-3 rounded hover:text-white hover:underline">Home</h2></div></a>
            </Container>
        </div>
    );
};

export default SupportLogin;