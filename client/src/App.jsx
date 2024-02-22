import React from "react";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import './index.scss';

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

const Layout = ()=>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Contact/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  }
])



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
