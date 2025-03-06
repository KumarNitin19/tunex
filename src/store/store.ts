import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./spotifySlice";

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
  },
});

// RootState Type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
