import { Header, Footer } from "../../Components/index";
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
