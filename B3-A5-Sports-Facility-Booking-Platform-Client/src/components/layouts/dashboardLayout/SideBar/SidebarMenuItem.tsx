import { TSidebarMenuItemProps } from "@/types/sidebar.type";
import { NavLink } from "react-router-dom";

const SidebarMenuItem = ({ icon, menuText, route }: TSidebarMenuItemProps) => {
  return (
    <NavLink
      to={route}
      className="flex justify-center items-center gap-3 p-2 text-base sm:text-lg hover:text-red-700 transition duration-150 relative"
    >
      {icon}
      {menuText}
    </NavLink>
  );
};

export default SidebarMenuItem;
