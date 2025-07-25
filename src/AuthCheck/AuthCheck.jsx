import { Navigate, useLocation } from "react-router";

const AuthCheck = ({ children }) => {
  const isAuthenticated = true;
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }
  return children;
};

export default AuthCheck;
