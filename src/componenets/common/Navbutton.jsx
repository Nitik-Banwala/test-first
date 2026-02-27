import React from "react";
import { Next, Prev } from "../../utils/Icons";

const Navbutton = ({ onNext, onPrev }) => {
    return (
        <div className="flex gap-4">
            <button
                onClick={onPrev}
                className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center hover:bg-teal-500 hover:border-0 transition"
            >
                <Prev />
            </button>

            <button
                onClick={onNext}
                className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center hover:bg-teal-500 hover:border-0 transition"
            >
                <Next />
            </button>
        </div>
    );
};

export default Navbutton;