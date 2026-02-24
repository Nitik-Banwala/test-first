import React from "react";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#414143] flex flex-col justify-center items-center m-auto">
            <div className="flex justify-between  gap-83.25 mt-22.5 mb-21.75">
                <div>
                    <h1 className="max-w-81.5 text-white font-normal text-xl leading-[165%]">
                        Eco-friendly yoga mats that blend-high performance.
                    </h1>
                    <p className="text-[#FAFAFA] font-medium mt-4.75 mb-5 text-xl leading-[100%]">
                        Follow us On :
                    </p>
                    <div className="flex gap-4 mt-4">
                        <div className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">

                            <FaYoutube size={"17"} />
                        </div>
                        <div className="w-9 h-9 border border-white  text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">

                            <FaFacebook size={"17"} />
                        </div>
                        <div className="w-9 h-9 border border-white  text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">

                            <FaXTwitter />
                        </div>
                        <div className="w-9 h-9 border border-white  text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">

                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="flex  gap-39.25">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[#FAFAFA] font-medium text-xl leading-[100%]">
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
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[#FAFAFA] font-medium text-xl leading-[100%]">
                            Other links
                        </h1>
                        <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                            Privacy Policy
                        </p>
                        <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                            Terms of Service
                        </p>
                        <p className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                            Terms of Service
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="py-5.25 w-full text-center border-t gradient-border-top">
                <h1 className="text-[#FAFAFA] font-normal text-base leading-[100%]">
                    Copyright © 2025 Yogalis. All Rights Reserved
                </h1>
            </div>
        </div>
    );
};

export default Footer;