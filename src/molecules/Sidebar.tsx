import React, { useState } from "react";
import { Icon } from "../atoms/Icon";
import LOGO_DARK from "../assets/tunex-dark.svg";
import LOGO_LIGHT from "../assets/tunex-light.svg";
import useTheme from "../hooks/useTheme";
import { ThemeEnum } from "../provider/Theme.Provider";
import ToggleTheme from "./ToggleTheme";
import IconButton from "../atoms/IconButton";

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
  const { mode } = useTheme();

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-50 w-full flex flex-col justify-center md:w-64 h-full bg-[#ffffffb3] dark:bg-transparent backdrop-blur-sm p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}>
        <div className="flex justify-between items-center absolute top-4 left-4 right-4">
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

          <div
            className={`absolute top-0 flex items-center justify-between w-full ${
              isOpen ? "rotate-180 right-0" : "rotate-0 -right-[430px]"
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
        <ul className="space-y-4">
          {SIDEBAR_LIST_ITEMS?.map((listItem) => (
            <ListItem key={listItem?.id} listItem={listItem} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
