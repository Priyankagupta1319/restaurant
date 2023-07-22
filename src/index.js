import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import BodyComponent from './component/Body';
import Profile from './component/Profile';
import Error from './component/Error';
import RestaurantMenu from './component/RestaurantMenu.';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element:< Profile/>,
          },
        ],
        
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
        
      // path:"/restaurant:restid",
      // element:<RestaurantMenu/>,
      // }
    ]
  }
  
  

]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
