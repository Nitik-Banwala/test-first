import React from "react";
// import { Next, Prev } from "../../utils/Icons";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Navbutton = ({ onNext, onPrev }) => {
    return (
        <div className="flex gap-4">
            <button
                onClick={onPrev}
                className="w-14 h-14 group rounded-full border border-gray-500 flex items-center justify-center hover:bg-teal-500 hover:border-0 transition"
            > 
                {/* <Prev /> */}
                <IoIosArrowBack className="group-hover:text-white" />
            </button>

            <button
                onClick={onNext}
                className="w-14 h-14 group rounded-full border border-gray-500 flex items-center justify-center hover:bg-teal-500 hover:border-0 transition"
            >
                <IoIosArrowForward className="group-hover:text-white" />
                 
                {/* <Next /> */}
            </button>
        </div>
    );
};

export default Navbutton;