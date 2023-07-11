import React from "react";

function CardDetail({ children, label, content }) {
    return (
        <div className="flex justify-between items-center py-3 mb-4">
            <div>
                <span className="text-xs text-gray-400 font-medium">
                    {label}
                </span>
                <h4 className="text-base font-medium">{content}</h4>
            </div>
            {children}
        </div>
    );
}

export default CardDetail;
