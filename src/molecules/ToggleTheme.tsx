import { Icon } from "../atoms/Icon";
import IconButton from "../atoms/IconButton";
import useTheme from "../hooks/useTheme";
import { ThemeEnum } from "../provider/Theme.Provider";

const ToggleTheme = ({ className = "" }: { className?: string }) => {
  const { mode, toggleTheme } = useTheme();
  return (
    <IconButton
      className={className}
      onClick={() =>
        toggleTheme(mode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT)
      }>
      <Icon
        icon="uil:sun"
        className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-main-text-light"
      />
      <Icon
        icon="basil:moon-outline"
        className="absolute w-5 h-5  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-main-text-dark"
      />
    </IconButton>
  );
};

export default ToggleTheme;
