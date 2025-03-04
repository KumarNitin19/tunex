import React, { useState } from "react";
import { Icon } from "../atoms/Icon";
import Button from "../atoms/Button";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay (closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 z-50 w-full md:w-64 h-full bg-[#ffffffb3] dark:bg-[#000000b3] backdrop-blur-xs text-white p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}>
        {/* Sidebar Header with Toggle Button */}
        <div className="flex justify-between items-center mb-8 relative">
          <h2 className="text-2xl font-bold">MusicApp</h2>

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
          <li>
            <a
              href="#home"
              className="block text-lg hover:text-opacity-80 transition">
              Home
            </a>
          </li>
          <li>
            <a
              href="#library"
              className="block text-lg hover:text-opacity-80 transition">
              Library
            </a>
          </li>
          <li>
            <a
              href="#playlist"
              className="block text-lg hover:text-opacity-80 transition">
              Playlists
            </a>
          </li>
          <li>
            <a
              href="#artists"
              className="block text-lg hover:text-opacity-80 transition">
              Artists
            </a>
          </li>
          <li>
            <a
              href="#search"
              className="block text-lg hover:text-opacity-80 transition">
              Search
            </a>
          </li>
        </ul>

        {/* Logout Button */}
        <Button className="mt-8 w-full py-2 text-lg bg-red-600 rounded-lg hover:bg-red-500 transition">
          Logout
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
