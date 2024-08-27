import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "./NavbarLinks";
import { HiMenuAlt3 } from "react-icons/hi";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

const NavLinkDropdown = () => {
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="bg-transparent">
          <HiMenuAlt3 className="text-2xl text-[#808080]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit flex lg:hidden">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          {NavbarLinks.map((link) => (
            <DropdownMenuRadioItem value="">
              <NavLink to={link.path}>{link.name}</NavLink>
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuRadioItem value="">
            <Button onClick={() => dispatch(logout())}>Logout</Button>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavLinkDropdown;
