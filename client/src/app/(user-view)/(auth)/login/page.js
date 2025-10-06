"use client"
import React, {useState} from 'react';
import { ArrowRight } from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import HelloLogo from '../../../../../public/Hello.png'
import { Eye, EyeOff } from "lucide-react";
import LoginPage from "@/components/user-ui/login-page";
import SignupPage from "@/components/user-ui/signup-page";


const Page = () => {
    const [tabs, setTabs] = useState("login");

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">ByteSchool</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Learn Skill Live</p>
                    </div>

                    {/* Toggle Tabs */}
                    <div>
                        <Tabs
                            defaultValue={"login"}
                            className="w-full border border-gray-200 dark:border-gray-700 rounded-lg p-5 overflow-hidden"
                            value={tabs}
                            onValueChange={(value) => setTabs(value)}
                        >
                            {tabs === "login" ? (
                                <h1 className="text-center text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                    Log in to your account
                                </h1>
                            ) : (
                                <div className="flex flex-col items-center gap-2 mb-4">
                                    <Image src={HelloLogo} alt="hello logo" width={60} height={60} className="rounded-full bg-gray-200 dark:bg-gray-700" />
                                    <h1 className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Create a New Account
                                    </h1>
                                </div>
                            )}

                            <TabsList className="grid w-full grid-cols-2 h-[50px]">
                                <TabsTrigger className={"cursor-pointer "} value={"login"}>Login</TabsTrigger>
                                <TabsTrigger className={"cursor-pointer "} value={"signup"}>Create Account</TabsTrigger>
                            </TabsList>
                            <TabsContent value={'login'}>
                               <LoginPage />
                            </TabsContent>
                            <TabsContent value={'signup'}>
                                <SignupPage />
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Footer */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
                        OTP পেতে সমস্যা হলে কল করুন: <span className="font-medium">+8801700000000</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;