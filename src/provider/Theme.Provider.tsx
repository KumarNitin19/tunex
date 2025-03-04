import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

export type ThemeMode = "light" | "dark";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: (theme: ThemeMode) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const [mode, setMode] = useState<ThemeMode>(
    savedTheme === ThemeEnum.DARK ? ThemeEnum.DARK : ThemeEnum.LIGHT
  );

  useEffect(() => {
    document.documentElement.classList.add(ThemeEnum.LIGHT);
    setMode(ThemeEnum.LIGHT);
  }, []);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = useCallback(
    (theme: ThemeMode) => {
      if (theme === ThemeEnum.LIGHT) {
        document.documentElement.classList.add(ThemeEnum.DARK);
        setMode(ThemeEnum.DARK);
      } else {
        document.documentElement.classList.add(ThemeEnum.LIGHT);
        setMode(ThemeEnum.LIGHT);
      }
    },
    [setMode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
