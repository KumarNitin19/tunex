import React, { useCallback, useState } from "react";
import { Icon } from "../atoms/Icon";
import LOGO_DARK from "../assets/tunex-dark.svg";
import LOGO_LIGHT from "../assets/tunex-light.svg";
import useTheme from "../hooks/useTheme";
import { ThemeEnum } from "../provider/Theme.Provider";
import ToggleTheme from "./ToggleTheme";
import IconButton from "../atoms/IconButton";
import { useNavigate } from "react-router-dom";

type ListItemType = {
  id: string;
  label: string;
  route: string;
};

const SIDEBAR_LIST_ITEMS: ListItemType[] = [
  {
    id: "1",
    label: "Weekly Release",
    route: "/released-this-week",
  },

  {
    id: "2",
    label: "Browse Genre",
    route: "/genre",
  },
  {
    id: "3",
    label: "Recently Played",
    route: "/recently-played",
  },
];

const ListItem: React.FC<{
  listItem: ListItemType;
  goToPage: (route: string) => void;
}> = ({ listItem, goToPage = () => {} }) => {
  return (
    <li
      className="relative -mx-4 px-4 py-2 text-main-text-light dark:text-main-text-dark hover:text-white dark:hover:text-black hover:font-medium cursor-pointer transition-all duration-300 group"
      onClick={() => goToPage(listItem?.route)}>
      <span className="absolute left-0 top-0 h-full w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
      <span className="relative z-10">{listItem?.label}</span>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useTheme();
  const navigate = useNavigate();

  const handleCloseSidebar = useCallback(() => setIsOpen(false), []);

  const goToPage = useCallback(
    (route: string) => {
      navigate(route);
      handleCloseSidebar();
    },
    [navigate]
  );

  return (
    <>
      <div
        className={`absolute top-0 left-0  w-full flex flex-col justify-center md:w-64 h-full bg-[#fffffff2] dark:bg-[#000000cc] backdrop-blur-sm p-4 transition-transform duration-300 ease-in-out transform z-[99] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}>
        <div className="flex justify-between items-center cursor-pointer absolute top-4 left-4 right-4">
          <div
            className="flex gap-2"
            role="button"
            title="Dashboard"
            onClick={() => goToPage("/")}>
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

          <div
            className={`absolute top-0 flex items-center justify-between ${
              isOpen
                ? "rotate-180 right-0 w-fit"
                : "rotate-0 -right-[430px] w-full"
            }`}>
            <IconButton
              className="!inline-flex md:!hidden transition-transform duration-300"
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon icon="material-symbols:close-rounded" fontSize={24} />
              ) : (
                <Icon icon="material-symbols:menu-rounded" fontSize={24} />
              )}
            </IconButton>
            <ToggleTheme
              className={`md:!hidden ${isOpen ? "hidden" : "!inline-flex"}`}
            />
          </div>
        </div>
        <ul>
          {SIDEBAR_LIST_ITEMS?.map((listItem) => (
            <ListItem
              key={listItem?.id}
              listItem={listItem}
              goToPage={goToPage}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
