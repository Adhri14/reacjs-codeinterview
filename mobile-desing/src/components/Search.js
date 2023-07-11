import React from "react";

function Search() {
    return (
        <div className="flex justify-between items-center px-4 h-14 py-2 mt-6 bg-[#f4f9ff] shadow-sm overflow-hidden rounded-full">
            <input
                type="text"
                className="flex-1 border-transparent focus:border-none focus:outline-none focus:ring-0 bg-[#f4f9ff]"
                placeholder="Search..."
            />
            <button
                type="button"
                className="border-transparent focus:border-none focus:outline-none focus:ring-0 w-[40px] flex justify-center items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 ml-3 h-full"
            >
                <img src="/assets/search.png" className="w-5 h-5" />
            </button>
        </div>
    );
}

export default Search;
