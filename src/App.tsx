import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import ThemeProvider from "./provider/Theme.Provider";
import SnackbarProvider from "./provider/Snackbar.Provider";

function App() {
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
