import { Outlet } from "react-router-dom";
import Navbar   from "./Navbar";
import Sidebar  from "./Sidebar";
import Footer   from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
-         <div className="container mx-auto">
-           <h1 className="text-2xl font-bold">Dashboard</h1>
-         </div>
+         <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
