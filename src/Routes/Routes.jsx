
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
import CoachesRoute from "./CoachesRoute";
import AdminRoute from "./AdminRoute";
import MySelectedSession from "../Pages/Dashboard/StudentDashboard/MySelectedSession";
import MyEnrolSession from "../Pages/Dashboard/StudentDashboard/MyEnrolSession";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import ManageSession from "../Pages/Dashboard/AdminDashboard/ManageSession";
import ManageUser from '../Pages/Dashboard/AdminDashboard/ManageUser';
import MySession from "../Pages/Dashboard/CoachesDashboard/MySession";
import AddSession from "../Pages/Dashboard/CoachesDashboard/AddSession";

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

        // Admin Dashboard
        {
          path:'/dashboard/admin',
          element:<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
        },
        {
          path:'/dashboard/manage-session',
          element:<ManageSession></ManageSession>
        },
        {
          path:'/dashboard/manage-user',
          element:<ManageUser></ManageUser>
        },
        // student dashboard 
        {
          path:'/dashboard/student',
          element:<StudentDashboard></StudentDashboard>
        },
        {
          path:'/dashboard/my-selected-session',
          element:<MySelectedSession></MySelectedSession>
        },
        {
          path:'/dashboard/my-enroll-session',
          element:<MyEnrolSession></MyEnrolSession>
        },
        {
          path:'/dashboard/payment-history',
          element:<PaymentHistory></PaymentHistory>
        },

        // Coaches DashBoard
        {
          path:'/dashboard/coaches',
          element:<CoachesRoute><CoachesDashboard></CoachesDashboard></CoachesRoute>
        },
        {
          path:'dashboard/my-session',
          element:<MySession></MySession>
        },
        {
          path:'/dashboard/add-a-session',
          element:<AddSession></AddSession>
        }
      ]
    }
  ]);

export default router;