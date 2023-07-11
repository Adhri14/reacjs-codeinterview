import React from "react";

function Badge({ image }) {
    return (
        <div className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-blue-400 border-2 border-white">
            <img src={image} className="w-[15px] h-[15px]" />
        </div>
    );
}

export default Badge;
