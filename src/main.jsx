import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Route';
import { RouterProvider } from "react-router-dom";
import ContextProvider from './components/provider/ContextProvider';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </ContextProvider>
  </React.StrictMode>

);




