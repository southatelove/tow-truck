import { Header } from "src/Components/Header";
import { Footer } from "src/Components/Footer";

import "./Layout.css";

import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
