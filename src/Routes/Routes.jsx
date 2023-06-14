
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Home/Home/Home";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/',
            element:<MainLayout></MainLayout>
        }
    ]
    },
  ]);

export default router;