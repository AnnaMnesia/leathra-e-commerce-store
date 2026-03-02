import React from "react";
import {createBrowserRouter,RouterProvider, Outlet, useLocation} from "react-router-dom";
import './index.scss';

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import ContactPage from "./pages/ContactPage/ContactPage";
import Stores from "./pages/Stores/Stores";
import Support from "./pages/Support/Support";
import Search from "./pages/Search/Search";
import Account from "./pages/Account/Account";
import Saved from "./pages/Saved/Saved";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = ()=>{
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`app ${isHome ? "home-layout" : ""}`}>
      <Navbar/>
      <main className="app-main">
        <Outlet/>
      </main>
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
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactPage/>
      },
      {
        path:"/stores",
        element:<Stores/>
      },
      {
        path:"/support",
        element:<Support/>
      },
      {
        path:"/search",
        element:<Search/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/saved",
        element:<Saved/>
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
