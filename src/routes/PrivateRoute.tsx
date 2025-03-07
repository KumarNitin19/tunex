import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Handles private route, wrap all private routes with this
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { getItem, setItem } = useLocalStorage();
  const spotifyToken = getItem("spotify-token");

  // Manages to set token and verify
  useEffect(() => {
    const route = window.location.pathname;
    const hash = window.location.hash;
    if (route === "/") {
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
        setItem("spotify-token", token);
        navigate("/");
      }
    }
    // If token is not present redirect user to /sign-up
    if (!spotifyToken) {
      navigate("/sign-up");
    }
  }, [spotifyToken, setItem, navigate]);

  return children;
}

export default memo(PrivateRoute);
