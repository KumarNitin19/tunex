import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
// import LightLogo from "./assets/tunex-light.svg";
// import DarkLogo from "./assets/tunex-dark.svg";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
