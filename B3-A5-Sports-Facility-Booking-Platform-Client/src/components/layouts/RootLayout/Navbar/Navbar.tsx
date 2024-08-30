import { NavLink, useNavigate } from "react-router-dom";
import NavLinkDropdown from "./NavLinkDropdown";
import { NavbarLinks } from "./NavbarLinks";
import "../../../cssStyles/Navbar.css";
import MainLogo from "@/components/shared/MainLogo";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { TUser } from "@/types/auth.type";
import Container from "../Container";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((currentState) => currentState.auth);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  const navigate = useNavigate();

  return (
    <div className="w-full py-5">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <MainLogo caller={"n"}></MainLogo>
          </div>
          <div className="nv hidden lg:flex justify-center items-center gap-2">
            {NavbarLinks.map((link) => (
              <NavLink
                to={link.path}
                className="p-2 rounded-full transition duration-300 ease-in-out"
              >
                {link.name}
              </NavLink>
            ))}

            {(user as TUser)?.role === "admin" && (
              <NavLink to="/admin-dashboard">Dashboard</NavLink>
            )}
            {(user as TUser)?.role === "user" && (
              <NavLink to="/user-dashboard">Dashboard</NavLink>
            )}
          </div>
          <div className="hidden lg:flex">
            {(user as TUser)?.email ? (
              <Button
                className="px-8 bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] text-lg rounded-lg border border-red-700 hover:border-transparent"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="px-8 bg-transparent hover:bg-red-700 text-red-700 hover:text-[rgba(255,255,255,0.88)] text-lg rounded-lg border border-red-700 hover:border-transparent"
                onClick={() => navigate("/login")}
              >
                Login/Reg
              </Button>
            )}
          </div>
          <div className="flex lg:hidden">
            <NavLinkDropdown></NavLinkDropdown>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
