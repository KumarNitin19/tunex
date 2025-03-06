import { useNavigate } from "react-router-dom";
import { Icon } from "../atoms/Icon";
import IconButton from "../atoms/IconButton";
import ToggleTheme from "./ToggleTheme";

interface HeaderProps {
  title: string;
  onSearch?: (query: string) => void;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const goToDashboard = () => navigate("/");

  return (
    <header className="flex items-center justify-between sticky top-0 p-6 z-[49] backdrop-blur-sm  bg-[#ffffffb3] dark:bg-[#0000004d] shadow-sm">
      <div className="flex items-center gap-2 mx-auto">
        <IconButton onClick={goToDashboard}>
          <Icon icon="material-symbols:chevron-left" fontSize={24} />
        </IconButton>
        <h1 className="text-2xl font-semibold text-main-text-light dark:text-main-text-dark">
          {title}
        </h1>
      </div>
      <ToggleTheme />
    </header>
  );
};

export default Header;
