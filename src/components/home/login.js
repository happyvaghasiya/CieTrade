import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <div className="bg-light pb-5">
            <h1 className="bg-black">.<br/>.<br/>.<br/>.<br/>.</h1>
            <div className="text-center w-fit mx-auto text-gray-500 justify-center pt-20">
                <div>
                    <img src="https://www.cietrade.net/Images/cieTradeNetLogoLogin.png" alt="" />
                    {isForgotPassword ? (
                        <div>
                            <h3 className="text-xl text-start text-gray-600 py-2">
                                Reset Your Password
                            </h3>
                            <p className="text-sm text-gray-600 text-start pb-4">
                                Enter your email address to reset your password. A reset link will
                                be sent to you.
                            </p>

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 mb-3 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <button className="w-full bg-red-600 text-white text-xl py-2 rounded hover:bg-red-700">
                                Send Email
                            </button>

                            <button
                                onClick={() => setIsForgotPassword(false)}
                                className="w-full mt-3  text-center"
                            >
                                Back to Login
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-2xl text-center text-gray-600 pt-2 pb-4">
                                Sign in to your account
                            </h3>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 mb-3 border-2 rounded-sm text-lg "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border-2 rounded-sm text-lg " />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 px-3 text-blue-500 hover:text-blue-700 focus:outline-none">{showPassword ? "🐵" : "🙈"}
                                </button>
                            </div>

                            <div className="flex justify-between items-center py-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />Remember Me</label>
                                <button onClick={() => setIsForgotPassword(true)}>Forgot your password?</button>
                            </div>
                            <button className="w-full bg-red-600 text-white py-2 text-2xl hover:bg-red-700">Sign In</button>
                            <div className="d-flex justify-between pt-3">
                                <a href="https://www.cietrade.net/PrivacyPolicy.aspx" className="text-sm ">Privacy Policy</a>
                                <a href="https://www.cietrade.net/TermsOfService.aspx" className="text-sm ">Terms of Service</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;