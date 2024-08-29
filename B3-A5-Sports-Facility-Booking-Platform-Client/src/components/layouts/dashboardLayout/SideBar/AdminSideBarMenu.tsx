import SidebarMenuItem from "./SidebarMenuItem";

const AdminSideBarMenu = () => {
  return (
    <div className="sb flex flex-col justify-center items-start mx-auto">
      <SidebarMenuItem
        icon={<i className="fa-solid fa-table-tennis-paddle-ball"></i>}
        menuText="Facilities"
        route="/admin-dashboard/admin-dashboard-facilities"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-b"></i>}
        menuText="Bookings"
        route="/admin-dashboard/admin-dashboard-bookings"
      ></SidebarMenuItem>

      <SidebarMenuItem
        icon={<i className="fa-solid fa-user-tie"></i>}
        menuText="Add Admin"
        route="/admin-dashboard/admin-dashboard-add-admin"
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
