import React from "react";
import { Begarrow, Globarrow, Uparrow, Downarrow, Handarrow } from "../utils/Icons";



const Service = () => {
    return (
        <div>
            <div className="max-w-285 mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex flex-col mt-16 md:mt-35 justify-center items-center">
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black leading-[100%] text-center">
                        Our Service Promise
                    </h1>

                    <div className="mt-12 max-w-230 md:mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-10 lg:gap-0 justify-items-center">
                        <div className="text-center flex flex-col items-center justify-center w-xs">
                            <div className="bg-[#01C6B5] w-22.5 h-22.5 rounded-full flex items-center justify-center">
                              <Globarrow/>
                            </div>
                            <h1 className="font-semibold text-2xl leading-[130%] mt-8.75">
                                Global Delivery & Easy Returns
                            </h1>
                            <p className="font-normal mt-2.5 max-w-77.25 text-base leading-[160%]">
                                Shop confidently with worldwide shipping and flexible return
                                policies.
                            </p>
                        </div>
                        <Uparrow/>
                        <div className="text-center flex flex-col items-center justify-center w-76">
                            <div className="bg-[#01C6B5] w-22.5 h-22.5 rounded-full flex items-center justify-center">
                               <Begarrow/> 
                            </div>
                            <h1 className="font-semibold text-2xl leading-[130%] mt-8.75">
                                Secure & Seamless Checkout
                            </h1>
                            <p className="font-normal mt-2.5 max-w-77.25 text-base leading-[160%]">
                                Your data is protected with encrypted, hassle-free payments.
                            </p>
                        </div>
                        <Downarrow/>
                        <div className="text-center flex flex-col items-center justify-center w-75">
                            <div className="bg-[#01C6B5] w-22.5 h-22.5 rounded-full flex items-center justify-center">
                        <Handarrow/>
                            </div>
                            <h1 className="font-semibold text-2xl leading-[130%] mt-8.75">
                                Dedicated Support, Always
                            </h1>
                            <p className="font-normal mt-2.5 max-w-77.25 text-base leading-[160%]">
                                Get expert help whenever you need it — we're just a message
                                away.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;