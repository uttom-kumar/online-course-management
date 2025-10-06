import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import bannerImg from '../../../public/banner.webp'

export default function Home() {
    return (
       <div className={"w-full p-5 bg-gray-100 dark:bg-gray-900 dark:text-white"}>
           <div className="w-full md:w-[70%] mx-auto flex flex-col md:flex-row items-center justify-between p-5 ">
               {/* Left Section */}
               <div className="space-y-6 md:w-1/2">
                   <h1 className="text-center sm:text-left text-3xl md:text-4xl font-bold  block sm:flex items-center gap-2">
                       Bangladesh Learns
                       <div className="justify-center sm:justify-start flex items-baseline gap-4">
                           <span className="text-red-600">Live</span>
                           <div className="live-dot"></div>
                       </div>
                   </h1>

                   <p className="text-center sm:text-left  text-lg">
                       Upgrade your future through Skill Development
                   </p>

                   <Button
                       className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg rounded-md px-6 py-2"
                   >
                       Start Learning<ArrowRight className="ml-2 h-5 w-5" />
                   </Button>
               </div>

               {/* Right Section */}
               <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                   <div className="relative">
                       <Image
                           src={bannerImg}
                           alt="bannerImg"
                           width={500}
                           height={400}
                           className="rounded-xl shadow-lg"
                       />
                   </div>
               </div>
           </div>
       </div>
    );
}
