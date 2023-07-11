import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import Search from "../components/Search";
import TagContact from "../components/TagContact";

function Root() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        try {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
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
                title="Contact"
                iconLeft="/assets/more.png"
                iconRight="/assets/plus.png"
            />
            <Search />
            <TagContact />
            <div className="flex flex-col mt-5">
                {data.map((item) => {
                    const split = item.phone.split(" ");
                    return (
                        <CardItem
                            key={item.id.toString()}
                            name={item.name}
                            telp={split[0]}
                            image="https://i.pravatar.cc/150?img=43"
                            href={`/detail/${item.id}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Root;
