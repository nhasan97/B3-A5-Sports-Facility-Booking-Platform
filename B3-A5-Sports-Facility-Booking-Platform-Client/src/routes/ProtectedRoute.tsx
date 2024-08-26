import { useAppSelector } from "@/redux/hooks";
import { TChildren } from "@/types/global.type";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: TChildren) => {
  const { token } = useAppSelector((currentState) => currentState.auth);
  const location = useLocation();

  if (!token) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
