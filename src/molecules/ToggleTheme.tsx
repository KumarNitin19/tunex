import Button from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import useTheme from "../hooks/useTheme";
import { ThemeEnum } from "../provider/Theme.Provider";

const ToggleTheme = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <Button
      className="px-0 py-0 h-10 w-10 hidden md:flex items-center justify-center text-main-text-light hover:text-foreground shrink-0 rounded-full bg-transparent dark:bg-transparent hover:bg-[#00000017] dark:hover:!bg-[#ffffff17]"
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
    </Button>
  );
};

export default ToggleTheme;
