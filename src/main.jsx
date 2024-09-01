import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./base/Home";
import Shop from "./base/Shop";
import About from "./base/About";
import Contact from "./base/Contact";
import Blog from "./base/Blog";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'shop',
        element: <Shop/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);
