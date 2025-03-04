import { useContext } from "react";
import { SnackbarContext } from "../provider/Snackbar.Provider";

const useSnackbar = () => useContext(SnackbarContext);

export default useSnackbar;
