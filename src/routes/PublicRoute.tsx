import { Navigate } from "react-router-dom";
import { memo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Handles public route, wrap all public routes with this
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { getItem } = useLocalStorage();
  const spotifyToken = getItem("spotify-token");

  return !spotifyToken ? children : <Navigate to="/" />;
}

export default memo(PublicRoute);
