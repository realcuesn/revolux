import Home from "@/routes/Home";
import Settings from "@/routes/Settings";
import {
    createMemoryRouter,
} from "react-router-dom";



const router = createMemoryRouter([
    {
        path: "/",
        element: <Home></Home>,
    },

    {
        path: "/settings",
        element: <Settings></Settings>,
    },
]);

export default router