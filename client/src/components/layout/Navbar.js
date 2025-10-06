"use client";

import {ArrowRight, Menu, Search} from "lucide-react";
import { ModeToggle } from "@/components/themeProvider/ModeToggle";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";
import SearchBox from "@/components/user-ui/SearchBox";
import Image from "next/image";
import profilePic from "../../../public/Hello.png";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const [openBox, setOpenBox] = useState(false);
    const boxRef = useRef(null);

    const handleToggle = () => {
        setOpenBox((prev) => !prev);
    };



    // outside click handle
    useEffect(() => {
        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target )) {
                setOpenBox(false);
            }
        }
        if (openBox) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openBox]);

    return (
        <nav className="w-full border-b bg-white/90 backdrop-blur-md dark:bg-black/80 dark:text-white sticky top-0 z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo + Links */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center font-extrabold text-2xl text-yellow-500">
                            Byte<span className={"hidden sm:block"}>School</span>
                        </Link>
                        {/* Desktop Links */}
                        <div className="hidden md:flex space-x-6">
                            <Link href="#" className="hover:text-yellow-600">
                                SPECIAL OFFER
                            </Link>
                            <Link href="#" className="hover:text-yellow-600">
                                FREE COURSES
                            </Link>
                            <Link href="#" className="hover:text-yellow-600">
                                BLOG
                            </Link>
                        </div>
                        </div>

                    {/* Search */}
                    <div className="relative">
                        {/* Search button */}
                        <button
                            onClick={handleToggle}
                            className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 px-3 py-2 rounded-full border w-full
                            max-w-sm cursor-pointer hover:bg-gray-200 hover:duration-300"
                        >
                            <Search className="w-5 h-5 text-green-500" />
                            <span className="text-sm hidden sm:block">search course</span>
                        </button>

                        {/* Overlay + Search dropdown */}
                        {openBox && (
                            <div className={`fixed inset-0 z-40 flex items-start justify-center mt-0 transition-all duration-100`}>
                                {/* Background Blur */}
                                <div className="absolute mt-16 h-screen inset-0 bg-black/30 backdrop-blur-sm"></div>

                                {/* Search Box */}
                                <div
                                    ref={boxRef}
                                    className="relative z-50 w-[90%] md:w-[768px] bg-white dark:bg-black/90 rounded-md shadow-lg transition-all duration-300 p-3"
                                >
                                    <SearchBox />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <ModeToggle />

                        {token ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                       <div className={"flex items-center gap-2 cursor-pointer bg-gray-100" +
                                           " dark:bg-gray-700 rounded-full px-1"} >
                                           <Image
                                               width={35}
                                               height={35}
                                               className="rounded-full"
                                               src={profilePic}
                                               alt="profile"
                                           />
                                           <Menu size={20} className="text-black dark:text-white" />
                                       </div>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        className="w-[350px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2"
                                    >
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="w-full px-3 py-2 mb-3 rounded bg-gray-100 hover:bg-gray-300 dark:bg-gray-700">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                    src={profilePic}
                                                    alt="profile"
                                                />
                                                <div>
                                                    <h3 className={'text-lg font-semibold m-0 p-0'}> UTTOM KUMAR</h3>
                                                    <p className={'m-0 p-0'}>01700000000</p>
                                                </div>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuGroup className="space-y-2 mb-3">
                                            <DropdownMenuItem className="w-full px-3 py-2 rounded bg-gray-100 hover:bg-gray-300 dark:bg-gray-700">
                                                <Link className={"w-full"} href="/dashboard">Dashboard</Link>
                                                <DropdownMenuShortcut>aa</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="w-full px-3 py-2 rounded bg-gray-100 hover:bg-gray-300 dark:bg-gray-700">
                                                <Link className={"w-full"} href="/courses">My Courses</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>

                                        <DropdownMenuGroup className="grid grid-cols-2 items-center gap-2">
                                            <DropdownMenuItem className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-700">
                                                <Link className={'w-full'} href={`/profile`}>PROFILE</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 cursor-pointer">
                                                LOGOUT
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>

                        ) : (
                            <>
                                <Link href="/login" className="cursor-pointer flex items-center  bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-md px-5 py-2">
                                    Login <span className={"hidden md:block"}>/ Signup</span> <ArrowRight className={"w-4 h-4"} />
                                </Link>
                            </>
                        )}

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu size={22} />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-60">
                                    <SheetHeader>
                                        <SheetTitle className="text-left">Menu</SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-4 mt-6 px-4">
                                        <Link href="#" className="hover:text-yellow-600 font-medium">
                                            SPECIAL OFFER
                                        </Link>
                                        <Link href="#" className="hover:text-yellow-600 font-medium">
                                            FREE COURSES
                                        </Link>
                                        <Link href="#" className="hover:text-yellow-600 font-medium">
                                            BLOG
                                        </Link>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
