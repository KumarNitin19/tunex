import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";

function App() {
  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark");
  // }, []);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
