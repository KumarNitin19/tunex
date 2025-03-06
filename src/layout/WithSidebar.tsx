import { ReactNode } from "react";
import Sidebar from "../molecules/Sidebar";
import Header from "../molecules/Header";

type props = {
  children: ReactNode;
};

const WithSidebar: React.FC<props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-background-light dark:bg-background-dark flex overflow-hidden">
      <Sidebar />
      <div className="w-full md:w-[calc(100vw_-_256px)] ml-auto rounded-l-2xl bg-[#f9fafd] dark:bg-[#232323] overflow-auto">
        <Header title="Dashboard" />
        <div className="md:py-4 md:px-4 pt-16 pb-3 px-6">{children}</div>
      </div>
    </div>
  );
};

export default WithSidebar;
