import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // wrong role access
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;