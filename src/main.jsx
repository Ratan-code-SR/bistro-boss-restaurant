import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Route';
import { RouterProvider } from "react-router-dom";
import ContextProvider from './components/provider/ContextProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>

      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>


);




