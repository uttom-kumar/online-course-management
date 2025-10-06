"use client";
import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const SignupPage = () => {
    const [passShow, setPassShow] = useState(false);
    const [passConformShow, setPassConformShow] = useState(false);
    const [step, setStep] = useState(1); // 1 = user info, 2 = otp, 3 = password
    const router = useRouter();

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep((prev) => prev + 1);
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("token", "1234567890");
        await router.push("/dashboard");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
            {/* STEP 1 — EMAIL + PHONE */}
            {step === 1 && (
                <form onSubmit={handleNextStep}>
                    <div className="mb-6 space-y-4">
                        <div>
                            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Provide phone number
                            </label>
                            <input
                                type="text"
                                placeholder="Provide phone number"
                                className="w-full px-3 py-4 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Provide email
                            </label>
                            <input
                                type="text"
                                placeholder="Provide email"
                                className="w-full px-3 py-4 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm"
                    >
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            )}

            {/* STEP 2 — OTP INPUT */}
            {step === 2 && (
                <form onSubmit={handleNextStep}>
                    <div className="mb-6 space-y-4">
                        <div>
                            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                className="w-full px-3 py-4 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white tracking-widest text-center"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm"
                    >
                        Verify OTP <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            )}

            {/* STEP 3 — PASSWORD SETUP */}
            {step === 3 && (
                <form onSubmit={handleFinalSubmit}>
                    <div className="mb-6 space-y-4">
                        {/* New Password */}
                        <div className="relative">
                            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                                New Password
                            </label>
                            <input
                                type={passShow ? "text" : "password"}
                                placeholder="New password"
                                className="w-full px-3 py-4 pr-10 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                            />
                            <Button
                                type="button"
                                onClick={() => setPassShow(!passShow)}
                                className="absolute cursor-pointer right-3 top-9 bg-transparent hover:bg-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                {passShow ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </Button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type={passConformShow ? "text" : "password"}
                                placeholder="Confirm password"
                                className="w-full px-3 py-4 pr-10 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                            />
                            <Button
                                type="button"
                                onClick={() => setPassConformShow(!passConformShow)}
                                className="absolute cursor-pointer right-3 top-9 bg-transparent hover:bg-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                {passConformShow ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm "
                    >
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            )}
        </div>
    );
};

export default SignupPage;
