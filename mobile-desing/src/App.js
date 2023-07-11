import logo from "./logo.svg";
import "./App.css";
import ButtonIcon from "./components/ButtonIcon";
import CardItem from "./components/CardItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages";
import Detail from "./pages/detail";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
]);

export default App;
