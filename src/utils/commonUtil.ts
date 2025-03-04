import { signOut } from "@firebase/auth";
import { auth } from "./firebase";

// Logout user
export async function logout() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userDetails");
      window.location.pathname = "/sign-up";
    })
    .catch((error) => {
      console.error(error);
    });
}
