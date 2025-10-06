"use client"
import React, {useState} from 'react';
import {ArrowRight, Eye, EyeOff} from "lucide-react";
import {TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const LoginPage = () => {
    const [passShow, setPassShow] = useState(false);
    return (
        <div>
            <form>
                <div className="mt-2 mb-4 space-y-2">
                    {/*---- email or phone input ----*/}
                    <div>
                        <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Provide phone number or email
                        </label>
                        <input
                            type="text"
                            placeholder="Provide phone number or email"
                            className="w-full px-3 py-4 border rounded-lg text-sm outline-none  focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    {/*---- password input ----*/}
                    <div className="relative">
                        <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Provide Password
                        </label>
                        <input
                            type={passShow ? "text" : "password"}
                            placeholder="Provide password"
                            className="w-full px-3 py-4 pr-10 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                        />

                        {/* 👁️ Toggle Button */}
                        <Button
                            type="button"
                            onClick={() => setPassShow(!passShow)}
                            className="cursor-pointer absolute right-3 top-9 text-gray-500 bg-transparent hover:bg-transparent hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            {passShow ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Button */}
                <button className="cursor-pointer w-full flex flex-col items-center py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-sm font-semibold text-gray-900 transition">
                    <span className={'flex items-center'}>Continue <ArrowRight className={"w-4 h-4"} /></span>
                </button>
            </form>

            {/* Links */}
            <div className="flex justify-between mt-4 text-sm">
                <TabsList className={"bg-transparent"}>
                    <TabsTrigger className={"cursor-pointer text-gray-500"} value={"signup"}>Create Account</TabsTrigger>
                </TabsList>
                <Link href="#"  className="text-blue-600 hover:underline">
                    Forgot password?
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;