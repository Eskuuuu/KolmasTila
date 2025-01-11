import { Outlet, Link } from "react-router-dom";
import NavBar from "../Components/navbar/navbar";
import Footer from "../Components/footer/footer";
import Empty from "../Components/empty/empty";

export default function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="main-content-container">
        <Outlet />
      </div>
      <Empty />
      <Footer />
    </div>
  );
}
