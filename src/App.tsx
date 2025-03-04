import "./App.css";
// import LightLogo from "./assets/tunex-light.svg";
import DarkLogo from "./assets/tunex-dark.svg";

function App() {
  return (
    <div className="app">
      <img
        loading="lazy"
        src={DarkLogo}
        alt="TuneX Logo"
        height={32}
        width={32}
      />
      <div className="text-3xl font-bold underline">Nitin</div>
    </div>
  );
}

export default App;
