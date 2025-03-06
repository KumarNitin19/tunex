import { useState } from "react";
import { Icon } from "../atoms/Icon";
import InputField from "../atoms/InputField";
import ToggleTheme from "./ToggleTheme";

interface HeaderProps {
  title: string;
  onSearch?: (query: string) => void;
}

const Header = ({ title, onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  //   const handleSearch = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (onSearch) onSearch(searchQuery);
  //   };

  return (
    <header className="hidden md:flex items-center justify-between  sticky top-0 p-6 z-[99] backdrop-blur-sm  bg-[#ffffffb3] dark:bg-[#0000004d] shadow-sm">
      <h1 className="text-2xl font-semibold text-main-text-light dark:text-main-text-dark">
        {title}
      </h1>
      <div className="flex items-center gap-3">
        <InputField
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
