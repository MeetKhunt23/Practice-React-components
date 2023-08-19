// import logo from "./logo.svg";
import { React, useState } from "react";
import "./App.css";
import Navbar from "./Components/Nav";
import Textform from "./Components/Textform";
import Alert from "./Components/alert";
import MyApp from "./Components/buttons";
import Profile from "./Components/profile";
import { List } from "./Components/profile";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cloth_products_toolkit from "./Components/cloth_products_toolkit";
import Dashboard from "./Components/dashboard";
import Cart from "./Components/cart";
import Rootlayout from "./Components/Rootlayout";
import Googlemap from "./Components/googlemap";
import Dynamic_form from "./Components/Dynamicform/dynamic_form";
import { BrowserRouter, Routes } from "react-router-dom";
import Create_form from "./Components/Dynamicform/create_form";
import Userform from "./Components/Dynamicform/userform";


function App(props) {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Rootlayout />}>
  //       <Route index element={<Dashboard />}></Route>
  //       <Route path="/cart" element={<Cart />}></Route>
  //     </Route>
  //   )
  // );
  return (
    <>
      {/* <Navbar title="meet" mode={mode} />
      <Alert alert="Heyy You Can't Ignore me"/>
      <div className="container">
      <Textform heading="Enter text to analyse "/>
      </div>
      <About/> 
      <MyApp/>
      <Profile />
      <List/>  */}
      {/* <Cloth_products_toolkit /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Googlemap/> */}
      <BrowserRouter>
          <Routes>
            <Route path="/form" element={<Dynamic_form/>} />
            <Route path="/create_form" element={<Create_form/>} />
            {/* <Route path="/userform/:id" element={<Userform/>} /> */}
          </Routes>
        </BrowserRouter>
      {/* <Dynamic_form/> */}
    </>
  );
}

export default App;
