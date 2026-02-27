import React from "react";
import { Read } from "../../utils/Icons";

const BlogCard = ({ image }) => {
    return (
        <div className="w-full max-w-91 lg:w-91 lg:h-124 mx-auto">

            <div className="w-full h-60 sm:h-72 lg:h-80.25">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-5 px-1">
                <p className="font-normal text-sm sm:text-base leading-[100%] text-[#414143]">
                    May 25, 2025
                </p>

                <h1 className="mt-3 font-semibold text-lg sm:text-xl leading-[100%]">
                    Our Origins in Movement
                </h1>

                <p className="mt-2 font-normal text-sm sm:text-base leading-[160%] text-[#414143]">
                    Rooted in France, Yogaova™ emerged from a desire to bring more
                    style, sustainability....
                </p>

                <a
                    href="#"
                    className="mt-3 font-medium text-sm sm:text-base leading-[160%] text-[#01C6B5] flex items-center gap-3"
                >
                    Read More
                    <span>
                       <Read/> 
                    </span>
                </a>
            </div>

        </div>
    );
};

export default BlogCard;