import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="bg-[#030303]">
      <Navbar></Navbar>

      <Outlet></Outlet>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
