import SidebarMenuItem from "./SidebarMenuItem";
import { TbBrandBooking } from "react-icons/tb";

const AdminSideBarMenu = () => {
  return (
    <div className="sb flex flex-col justify-center items-start mx-auto">
      <SidebarMenuItem
        icon={<i className="fa-solid fa-table-tennis-paddle-ball"></i>}
        menuText="Facilities"
        route="/dashboard/admin-dashboard-facilities"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-b"></i>}
        menuText="Bookings"
        route="/dashboard/admin-dashboard-bookings"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-user-tie"></i>}
        menuText="Add Admin"
        route="/dashboard/admin-dashboard-add-admin"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-arrow-left"></i>}
        menuText="Back to Site"
        route="/"
      ></SidebarMenuItem>
    </div>
  );
};

export default AdminSideBarMenu;
