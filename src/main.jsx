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
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto bg-green-100'>
    <React.StrictMode>
      <AuthProvider>
    <HelmetProvider>
      <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
  </div >

)
