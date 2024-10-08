import { MdDashboard } from "react-icons/md";
import "../../../cssStyles/Sidebar.css";
import SidebarMenuItem from "./SidebarMenuItem";

const UserSideBarMenu = () => {
  return (
    <div className="sb flex flex-col justify-center items-start mx-auto">
      <SidebarMenuItem
        icon={<MdDashboard className="text-xl" />}
        menuText="Overview"
        route="/user-dashboard/user-overview"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-b"></i>}
        menuText="My Bookings"
        route="/user-dashboard/user-dashboard-bookings"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-arrow-left"></i>}
        menuText="Back to Site"
        route="/"
      ></SidebarMenuItem>
    </div>
  );
};

export default UserSideBarMenu;
