import { createBrowserRouter } from "react-router-dom";
// import {App} from "./index";
// import { Suspense } from "react";
// import Loading from "@/components/Loading";
import Auth from "@/pages/Auth";
import Layout from "@/pages/Layout";
import Rooms from "@/pages/Rooms";
import NotFound from "@/pages/NotFound";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Rooms/>
            },
            {
                path:"/rooms",
                element:<Rooms/>
            }
        ],
        
    },
    {
        path:"/auth",
        element:<Auth/>
    },
    {
        path:"/*",
        element:<NotFound/>
    }
        
])