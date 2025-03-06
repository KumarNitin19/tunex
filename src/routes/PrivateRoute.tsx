import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { getItem, setItem } = useLocalStorage();
  const spotifyToken = getItem("spotify-token");

  useEffect(() => {
    const route = window.location.pathname;
    const hash = window.location.hash;
    if (route === "/") {
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
        setItem("spotify-token", token);
        navigate("/");
      }
    } else if (!spotifyToken) {
      navigate("/sign-up");
    }
  }, [spotifyToken, setItem, navigate]);

  return children;
}

export default memo(PrivateRoute);
