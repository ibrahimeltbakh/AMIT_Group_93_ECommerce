import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Navbar />
      <main className="container d-flex d-flex justify-content-center py-5 min-vh-100">
        <Outlet />
      </main>
    </div>
  );
}
