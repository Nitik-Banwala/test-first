import React, { useState } from "react"
import { FaqData } from "../utils/Data";
const Accordion =()=> {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-full sm:max-w-2xl md:max-w-212 mx-auto mt-10 sm:mt-20 md:mt-35 px-4 sm:px-6 md:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 ">
                Frequently Asked Questions
            </h1>
            <p className="text-center text-gray-500 mb-12.5 text-sm sm:text-base">
                Real Questions. Expert Answers. Total Confidence.
            </p>
            <div className="space-y-3 sm:space-y-4">
                {FaqData.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div
                            key={index}
                            className={`border py- transition-all duration-300 ${isOpen ? "border-teal-400 shadow-sm" : "border-gray-300"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-5 px-8.75 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-sm sm:text-base md:text-lg pr-4">{item.title}</span>
                                <svg
                                    className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 sm:max-h-56 md:max-h-40 pb-3 sm:pb-4 md:pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-600 px-3 sm:px-4 md:px-5 text-sm sm:text-base leading-relaxed">{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Accordion;