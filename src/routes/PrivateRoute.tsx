import { Navigate } from "react-router-dom";
import { memo } from "react";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = {};

  return user ? children : <Navigate to="/sign-in" />;
}

export default memo(PrivateRoute);
