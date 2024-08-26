import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <Outlet></Outlet>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
