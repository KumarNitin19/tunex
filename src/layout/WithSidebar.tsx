import { ReactNode, useMemo } from "react";
import Sidebar from "../molecules/Sidebar";
import Header from "../molecules/Header";
import { useLocation } from "react-router-dom";
import Player from "../molecules/Player";
import Loader from "../atoms/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type props = {
  children: ReactNode;
};

// All page with sidebar should be wrapped in this
const WithSidebar: React.FC<props> = ({ children }) => {
  const { loading } = useSelector((store: RootState) => store.spotify);
  const location = useLocation();

  const headerTitle = useMemo(() => {
    switch (location.pathname) {
      case "/released-this-week":
        return "Weekly Release";
      case "/genre":
        return "Genres";
      case "/recently-played":
        return "Recently Played";
      default:
        return "Dashboard";
    }
  }, [location]);

  return (
    <div className="w-full h-full bg-background-light dark:bg-background-dark flex overflow-hidden">
      <Sidebar />
      <div className="main-content w-full md:w-[calc(100vw_-_256px)] ml-auto rounded-l-2xl border-l dark:border-[#535353] overflow-auto">
        <Header title={headerTitle} />
        <div className="md:py-4 md:px-4 p-3 px-6">{children}</div>
      </div>
      <Player />
      <Loader loading={loading} />
    </div>
  );
};

export default WithSidebar;
