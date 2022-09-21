import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Layout: FunctionComponent = () => {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  );
};
