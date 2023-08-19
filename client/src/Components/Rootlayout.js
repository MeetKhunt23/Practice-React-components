import React from "react";
import { Outlet } from "react-router-dom";
import Navbarnew from "./navbar";
import { Provider } from "react-redux";
import { store } from "../app/store";
import NavScrollExample from "./navigation";

const Rootlayout = () => {
  return (
    <>
      <Provider store={store}>
       <NavScrollExample/>
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default Rootlayout;
