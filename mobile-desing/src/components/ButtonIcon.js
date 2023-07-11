import React from "react";
import { Link } from "react-router-dom";

function ButtonIcon({ image, href }) {
    return (
        <Link
            to={href}
            className="flex justify-center items-center p-4 rounded-full bg-white border-[1px] border-gray-100"
        >
            <img src={image} className="w-5 h-5" />
        </Link>
    );
}

export default ButtonIcon;
