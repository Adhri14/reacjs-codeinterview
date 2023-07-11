import React from "react";
import { Link } from "react-router-dom";

function CardItem({ image, name, telp, href }) {
    return (
        <Link to={href} className="flex items-center mb-4">
            <img src={image} className="w-10 h-10 rounded-full" />
            <div className="flex-1 ml-5">
                <h3 className="text-sm font-semibold mb-1">{name}</h3>
                <p className="text-xs font-normal text-gray-300">{telp}</p>
            </div>
        </Link>
    );
}

export default CardItem;
