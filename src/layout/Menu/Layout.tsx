import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Header } from "../../Components/Header/Header";

export function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
