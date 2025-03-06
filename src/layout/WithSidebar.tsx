import { ReactNode } from "react";
import Sidebar from "../molecules/Sidebar";
import Header from "../molecules/Header";
import { useLocation } from "react-router-dom";
import Player from "../molecules/Player";

type props = {
  children: ReactNode;
};

const WithSidebar: React.FC<props> = ({ children }) => {
  const location = useLocation();
  const headerTitle = () => {
    switch (location.pathname) {
      case "/released-this-week":
        return "Weekly Release";
      case "/genre":
        return "Genres";
      case "/your-playlist":
        return "Your Playlist";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="w-full h-full bg-background-light dark:bg-background-dark flex overflow-hidden">
      <Sidebar />
      <div className="main-content w-full md:w-[calc(100vw_-_256px)] ml-auto rounded-l-2xl border-l dark:border-[#535353] overflow-auto">
        <Header title={headerTitle()} />
        <div className="md:py-4 md:px-4 pt-16 pb-3 px-6">{children}</div>
      </div>
      <Player />
    </div>
  );
};

export default WithSidebar;
