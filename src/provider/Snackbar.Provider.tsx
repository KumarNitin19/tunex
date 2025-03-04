import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Snackbar, { SnackbarProps } from "../atoms/Snackbar";

interface SnackbarContextProps {
  addSnackbar: (e: SnackbarProps) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  addSnackbar: () => {},
});

const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [snackbarQueue, setSnackbarQueue] = useState<SnackbarProps[]>([]);

  useEffect(() => {
    if (snackbarQueue?.length > 0) {
      const timeout = setTimeout(
        () => setSnackbarQueue((prev) => prev.slice(0, prev.length - 1)),
        3000
      );
      return () => clearTimeout(timeout);
    }
  }, [snackbarQueue]);

  const addSnackbar = useCallback(
    (content: SnackbarProps) => setSnackbarQueue((prev) => [content, ...prev]),
    []
  );

  const value = useMemo(() => ({ addSnackbar }), [addSnackbar]);

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {snackbarQueue?.map(
        (
          { message = "", variant = "success" }: SnackbarProps,
          index: number
        ) => (
          <Snackbar
            key={message}
            message={message}
            variant={variant}
            position="center"
            style={{
              top: 24 + index * 64,
            }}
          />
        )
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
