import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

