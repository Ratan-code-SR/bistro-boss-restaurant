import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Route';
import { RouterProvider } from "react-router-dom";
import ContextProvider from './components/provider/ContextProvider';

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ContextProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
    </ContextProvider>
  </React.StrictMode>

);




