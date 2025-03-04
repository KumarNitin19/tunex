import { ReactNode } from "react";
import Sidebar from "../molecules/Sidebar";

type props = {
  children: ReactNode;
};

const WithSidebar: React.FC<props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-background-light dark:bg-background-dark flex overflow-hidden">
      <Sidebar />
      <div className="w-[calc(100vw_-_256px)] ml-auto rounded-l-lg bg-[#f9fafd] dark:bg-[#232323] p-4">
        {children}
      </div>
    </div>
  );
};

export default WithSidebar;
