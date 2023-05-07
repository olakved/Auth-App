import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
  const { userData } = useContext(UserContext);
  const location = useLocation();

  if (!userData) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return userData ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
