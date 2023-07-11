import React from "react";
import ButtonIcon from "./ButtonIcon";

function Header({ title, iconLeft, iconRight, href }) {
    return (
        <div className="flex justify-between items-center">
            <ButtonIcon image={iconLeft} href={href} />
            {title && (
                <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                </h3>
            )}
            <ButtonIcon image={iconRight} />
        </div>
    );
}

export default Header;
