import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import "./index.css";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// lazy loading
// when we first click on grocery it takes some time to load the bundled js file but react will not wait for it and throw error as it cnnot find the grocery component
//  to handle this we use suspense - grab grocery component inside it 
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

  // authentication logic example to show usecase of context provider
  const [userName, setUserName] = useState();
  useEffect(() => {
    // Make an Api call and send username and password
    const data = {
      name: "Akshat Sharma"
    }
    setUserName(data.name)
  }, [])

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </UserContext.Provider>
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        // fallback - what should react render whhen the code is not available
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  // {
  //   path: "/about",
  //   element: <About/>
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

