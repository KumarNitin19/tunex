import { ReactNode } from "react";
import Sidebar from "../molecules/Sidebar";

type props = {
  children: ReactNode;
};

const WithSidebar: React.FC<props> = ({ children }) => {
  return (
    <div className="w-full h-full flex overflow-hidden">
      <Sidebar />
      <div className="w-[calc(100vw_-_256px)] ml-auto">{children}</div>
    </div>
  );
};

export default WithSidebar;
