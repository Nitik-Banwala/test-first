import React from "react";
import { Like } from "../../utils/Icons";

const LikeButton = () => {
    return (
        <div
            className="w-9 h-9 rounded-full bg-white flex justify-center items-center cursor-pointer shadow"
            
        >
            <Like/>
        </div>
    );
};

export default LikeButton;