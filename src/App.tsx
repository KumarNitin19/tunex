import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import ThemeProvider from "./provider/Theme.Provider";
import SnackbarProvider from "./provider/Snackbar.Provider";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";

function App() {
  const { setItem } = useLocalStorage();

  useEffect(() => {
    const route = window.location.pathname;
    if (route === "/") {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
        setItem("spotify-token", token);
      }
    }
  }, [setItem]);

  return (
    <div className="app">
      <ThemeProvider>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
