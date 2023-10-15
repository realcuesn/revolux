import Home from "@/routes/Home";
import Settings from "@/routes/Settings";
import Tasks from "@/routes/Tasks";
import Tracking from "@/routes/Tracking";
import Sessions from "@/routes/Sessions";
import {
    createMemoryRouter,
} from "react-router-dom";



const router = createMemoryRouter([
    {
        path: "/",
        element: <Home></Home>,
    },

    {
        path: "/sessions",
        element: <Sessions></Sessions>,
    },


    {
        path: "/tasks",
        element: <Tasks></Tasks>,
    },


    {
        path: "/tracking",
        element: <Tracking></Tracking>,
    },

    {
        path: "/settings",
        element: <Settings></Settings>,
    },
]);

export default router