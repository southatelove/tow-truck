import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
