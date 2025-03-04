import { Navigate, useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { logout } from "../utils/commonUtil";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { setItem, getItem } = useLocalStorage();
  const user = getItem("userDetails");

  useEffect(() => {
    if (user) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const idToken = await user?.getIdToken();
          setItem("userDetails", { ...user?.providerData[0], idToken });
          navigate("/");
        } else {
          logout();
        }
      });
    }
  }, []);

  return user ? children : <Navigate to="/sign-up" />;
}

export default memo(PrivateRoute);
