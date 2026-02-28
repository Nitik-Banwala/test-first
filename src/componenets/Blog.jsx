import React from "react";
import BlogCard from "./common/BlogCard";

const Blog = () => {
    return (
        <div className="px-4 ">
            <div className="max-w-285 mx-auto">

                <div className="flex flex-col  sm:flex-row  sm:items-start items-center justify-between mt-16 sm:mt-24 lg:mt-32.5 gap-6">

                    <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-black leading-[100%]">
                        From The Blog
                    </h1>

                    <button className="bg-[#01C6B5] cursor-pointer font-medium text-base sm:text-lg lg:text-xl leading-[100%] text-white py-3 sm:py-4 px-5 sm:px-6.5">
                        View All Blogs
                    </button>

                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-10 sm:mt-12.5">
                    <BlogCard image={"/Blog1.png"} />
                    <BlogCard image={"/Blog2.png"} />
                    <BlogCard image={"/Blog3.png"} />
                </div>

            </div>
        </div>
    );
};

export default Blog;