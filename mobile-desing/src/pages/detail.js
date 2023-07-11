import React from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import Header from "../components/Header";
import Badge from "../components/Badge";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Detail() {
    const params = useParams();
    const [data, setData] = useState();
    const [buttonActive, setButtonActive] = useState("detail");

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = async () => {
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${params?.id}`
            );
            console.log(res.data);
            if (res.data) {
                setData(res.data);
            }
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className="w-full min-h-full bg-white p-5">
            <Header
                href="/"
                iconLeft="/assets/left-arrow.png"
                iconRight="/assets/more-dot.png"
            />
            <div className="flex flex-col w-full justify-center items-center pt-14">
                <img
                    src="https://i.pravatar.cc/150?img=43"
                    className="w-28 h-28 rounded-full border-[#f4f9ff] border-2"
                />
                <h3 className="text-xl font-bold mt-5 text-center">
                    {data?.name}
                </h3>
                <p className="text-base font-regular text-gray-300 text-center">
                    {data?.address?.city}
                </p>
            </div>
            <div className="flex justify-between items-center bg-[#f4f9ff] w-full mt-6 p-1 h-14 rounded-full overflow-hidden space-x-4">
                <div
                    onClick={() => setButtonActive("detail")}
                    className={`w-1/2 ${
                        buttonActive === "detail"
                            ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white"
                            : "bg-transparent text-gray-400"
                    } flex justify-center items-center h-full rounded-full font-semibol`}
                >
                    Details
                </div>
                <div
                    onClick={() => setButtonActive("history")}
                    className={`w-1/2 ${
                        buttonActive === "history"
                            ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white"
                            : "bg-transparent text-gray-400"
                    } flex justify-center items-center h-full rounded-full font-semibol`}
                >
                    History
                </div>
            </div>
            <div className="w-full mt-5">
                <CardDetail
                    label="Phone Number"
                    content={data?.phone?.split(" ")[0]}
                >
                    <div className="flex -space-x-3">
                        <Badge image="/assets/chatbox.svg" />
                        <Badge image="/assets/call.svg" />
                    </div>
                </CardDetail>
                <CardDetail label="Email Address" content={data?.email}>
                    <div className="flex -space-x-3">
                        <Badge image="/assets/mail.svg" />
                    </div>
                </CardDetail>
                <CardDetail label="Website" content={data?.website}>
                    <div className="flex -space-x-3">
                        <Badge image="/assets/globe.svg" />
                    </div>
                </CardDetail>
                <CardDetail label="Birth" content="13th Oct, 2001">
                    <div className="flex -space-x-3">
                        <Badge image="/assets/calendar.svg" />
                    </div>
                </CardDetail>
            </div>
        </div>
    );
}

export default Detail;
