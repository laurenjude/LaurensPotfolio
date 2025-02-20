import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const DefaultLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default DefaultLayout;
