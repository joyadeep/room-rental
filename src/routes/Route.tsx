import { createBrowserRouter } from "react-router-dom";
// import {App} from "./index";
// import { Suspense } from "react";
// import Loading from "@/components/Loading";
import Auth from "@/pages/Auth";
import Layout from "@/pages/Layout";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<Auth/>,
    },
    {
        path:"/dashboard",
        element:<Layout/>
    }
])