import RootLayout from "@/components/layouts/RootLayout/RootLayout";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import FacilityListingPage from "@/pages/FacilityListingPage";
import DashboardLayout from "@/components/layouts/dashboardLayout/DashboardLayout";
import FacilityManagement from "@/pages/admin/FacilityManagement";
import FacilityDetails from "@/pages/FacilityDetails";
import BookingPage from "@/pages/BookingPage";
import AddAdmin from "@/pages/admin/AddAdmin";
import BookingManagement from "@/pages/admin/BookingManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/facility-list",
        element: <FacilityListingPage />,
      },
      {
        path: "/facility-details/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/booking-page/:id",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute role="admin">
            <FacilityManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin-dashboard-facilities",
        element: (
          <ProtectedRoute role="admin">
            <FacilityManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin-dashboard-bookings",
        element: (
          <ProtectedRoute role="admin">
            <BookingManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin-dashboard-add-admin",
        element: (
          <ProtectedRoute role="admin">
            <AddAdmin />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
