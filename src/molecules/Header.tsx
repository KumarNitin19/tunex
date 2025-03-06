import ToggleTheme from "./ToggleTheme";

interface HeaderProps {
  title: string;
  onSearch?: (query: string) => void;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="hidden md:flex items-center justify-between  sticky top-0 p-6 z-[99] backdrop-blur-sm  bg-[#ffffffb3] dark:bg-[#0000004d] shadow-sm">
      <h1 className="text-2xl font-semibold text-main-text-light dark:text-main-text-dark">
        {title}
      </h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
