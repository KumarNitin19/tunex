import React, { useCallback, useState } from "react";
import { Icon } from "../atoms/Icon";
import Button from "../atoms/Button";
import { logout } from "../utils/commonUtil";
import Loader from "../atoms/Loader";
import LOGO_DARK from "../assets/tunex-dark.svg";
import LOGO_LIGHT from "../assets/tunex-light.svg";
import useTheme from "../hooks/useTheme";
import { ThemeEnum } from "../provider/Theme.Provider";
import ToggleTheme from "./ToggleTheme";

type ListItemType = {
  id: string;
  label: string;
  route: string;
};

const SIDEBAR_LIST_ITEMS: ListItemType[] = [
  {
    id: "1",
    label: "Weekly Release",
    route: "/",
  },
  {
    id: "2",
    label: "Featured Playlist",
    route: "/",
  },
  {
    id: "3",
    label: "Browse Genre",
    route: "/",
  },
];

const ListItem: React.FC<{ listItem: ListItemType }> = ({ listItem }) => {
  return (
    <li>
      <a
        href={listItem?.route}
        className="block text-main-text-light dark:text-main-text-dark text-lg hover:text-opacity-80 hover:font-medium transition">
        {listItem?.label}
      </a>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mode } = useTheme();

  const handleUserLogout = useCallback(async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 z-50 w-full flex flex-col justify-between md:w-64 h-full bg-[#ffffffb3] dark:bg-transparent backdrop-blur-xs p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}>
        {/* Sidebar Header with Toggle Button */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="flex gap-2">
            <img
              src={mode === ThemeEnum.LIGHT ? LOGO_DARK : LOGO_LIGHT}
              alt="TuneX Logo"
              height={32}
              width={32}
            />
            <h2 className="text-main-text-light dark:text-main-text-dark text-2xl font-bold">
              TuneX
            </h2>
          </div>

          {/* Toggle Button (Attached to Sidebar) */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="text"
            className={`absolute top-2 px-0 py-0 bg-transparent text-main-text-light hover:text-main-text-light dark:text-main-text-dark dark;hover:text-main-text-dark md:hidden transition-transform duration-300 ${
              isOpen ? "rotate-180 -right-0" : "rotate-0 -right-[46px]"
            }`}>
            {isOpen ? (
              <Icon icon="material-symbols:close-rounded" fontSize={24} />
            ) : (
              <Icon icon="material-symbols:menu-rounded" fontSize={24} />
            )}
          </Button>
        </div>

        {/* List Items */}
        <ul className="space-y-4">
          {SIDEBAR_LIST_ITEMS?.map((listItem) => (
            <ListItem key={listItem?.id} listItem={listItem} />
          ))}
        </ul>

        {/* Logout Button */}
        <div className="flex gap-2 items-center">
          <Button
            className="w-full py-2 text-lg rounded-lg transition"
            variant="outline"
            onClick={handleUserLogout}>
            Logout
          </Button>
          <div className="divider"></div>
          <ToggleTheme />
        </div>
      </div>
      <Loader loading={isLoading} />
    </>
  );
};

export default Sidebar;
