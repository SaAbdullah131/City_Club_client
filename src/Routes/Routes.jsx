
import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from "../Layout/Error";
import Home from "../Pages/Home/Home/Home";
import AllCoaches from '../Pages/AllCoaches/AllCoaches';
import Session from '../Pages/Session/Session';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<MainLayout></MainLayout>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'allcoaches',
          element:<AllCoaches></AllCoaches>
        },
        {
          path:'session',
          element:<Session></Session>
        }
    ]
    },
  ]);

export default router;