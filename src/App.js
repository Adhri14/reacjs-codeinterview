import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Route from "./pages";
import Feature from "./pages/feature";
import Pricing from "./pages/pricing";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Route />,
    },
    {
        path: "/feature",
        element: <Feature />,
    },
    {
        path: "/pricing",
        element: <Pricing />,
    },
]);

export default App;
