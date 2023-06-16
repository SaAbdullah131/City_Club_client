
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
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../Layout/Dashboard';
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import CoachesDashboard from "../Pages/Dashboard/CoachesDashboard/CoachesDashboard";

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
    {
      path:'/dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        // student dashboard 
        {
          path:'/dashboard/student',
          element:<StudentDashboard></StudentDashboard>
        },

        // Admin Dashboard
        {
          path:'/dashboard/admin',
          element:<AdminDashboard></AdminDashboard>
        },

        // Coaches DashBoard
        {
          path:'/dashboard/coaches',
          element:<CoachesDashboard></CoachesDashboard>
        }
      ]
    }
  ]);

export default router;