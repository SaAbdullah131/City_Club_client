import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from './Provider/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto bg-green-100'>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </div>

)
