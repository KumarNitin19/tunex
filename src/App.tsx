import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import ThemeProvider from "./provider/Theme.Provider";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
