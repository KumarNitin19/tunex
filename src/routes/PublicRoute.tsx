import { Navigate } from "react-router-dom";
import { memo } from "react";

function PublicRoute({ children }: { children: React.ReactNode }) {
  const user = null;
  return !user ? children : <Navigate to="/" />;
}

export default memo(PublicRoute);
