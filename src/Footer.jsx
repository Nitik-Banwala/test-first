import React from "react";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#414143] w-full">
            <div className="bg-[#414143] flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12 md:gap-20 lg:gap-83.25 mt-12 sm:mt-16 md:mt-22.5 mb-12 sm:mb-16 md:mb-21.75 w-full">
                    <div className="w-full md:w-auto">
                        <h1 className="max-w-81.5 text-white font-normal text-base sm:text-lg md:text-xl leading-[165%]">
                            Eco-friendly yoga mats that blend-high performance.
                        </h1>
                        <p className="text-[#FAFAFA] font-medium mt-3 sm:mt-4.75 mb-4 sm:mb-5 text-base sm:text-lg md:text-xl leading-[100%]">
                            Follow us On :
                        </p>
                        <div className="flex gap-3 sm:gap-4 mt-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                                <FaYoutube size={"15"} />
                            </div>
                            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                                <FaFacebook size={"15"} />
                            </div>
                            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                                <FaXTwitter size={"15"} />
                            </div>
                            <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                                <FaLinkedinIn size={"15"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 lg:gap-39.25 w-full md:w-auto">
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                            <h1 className="text-[#FAFAFA] font-medium text-base sm:text-lg md:text-xl leading-[100%]">
                                Quick Links
                            </h1>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Leggings
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Women’s Clothing
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Men’s Clothing
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Yoga & Pilates Equipment
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Jewelry & Wellness
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Accessories
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                                Size Guide
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                            <h1 className="text-[#FAFAFA] font-medium text-base sm:text-lg md:text-xl leading-[100%]">
                                Other links
                            </h1>
                            <p className="text-[#FAFAFA] font-normal text-sm sm:text-base leading-[100%] hover:text-[#01C6B5] cursor-pointer transition">
                                Privacy Policy
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-sm sm:text-base leading-[100%] hover:text-[#01C6B5] cursor-pointer transition">
                                Terms of Service
                            </p>
                            <p className="text-[#FAFAFA] font-normal text-sm sm:text-base leading-[100%] hover:text-[#01C6B5] cursor-pointer transition">
                                Terms of Service
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-4 sm:py-5.25 w-full text-center border-t border-[#555555]">
                    <h1 className="text-[#FAFAFA] font-normal text-xs sm:text-sm md:text-base leading-[100%]">
                        Copyright © 2025 Yogalis. All Rights Reserved
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;