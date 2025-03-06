import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRecommendationsAsync,
  getGenersAsync,
  getTopTenReleasedThisWeekAsync,
} from "./spotifyAction";
import { GenericArray, GenericObject } from "../commonType";

// Define the shape of the state
interface SpotifyState {
  releasedThisWeek: GenericArray<GenericObject<string | number>>[];
  featuredPlaylists: GenericArray<GenericObject<string | number>>[];
  genres: GenericArray<GenericObject<string | number>>[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: SpotifyState = {
  releasedThisWeek: [],
  featuredPlaylists: [],
  genres: [],
  loading: false,
  error: null,
};

// Fetch Released This Week Songs
export const getTopTenReleasedThisWeek = createAsyncThunk(
  "spotify/getTopTenReleasedThisWeek",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTopTenReleasedThisWeekAsync();
      return response.data.albums.items;
    } catch (error: unknown) {
      return rejectWithValue(error || "Error fetching data");
    }
  }
);

// Fetch Featured Playlists
export const getRecommendations = createAsyncThunk(
  "spotify/getRecommendations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRecommendationsAsync();
      return response.data.albums;
    } catch (error: unknown) {
      return rejectWithValue(error || "Error fetching data");
    }
  }
);

// Fetch Genres
export const getGenres = createAsyncThunk(
  "spotify/getGenres",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getGenersAsync();
      return response.data.categories.items;
    } catch (error: unknown) {
      return rejectWithValue(error || "Error fetching data");
    }
  }
);

// Redux Slice
const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {}, // No synchronous reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(getTopTenReleasedThisWeek.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopTenReleasedThisWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.releasedThisWeek = action.payload;
      })
      .addCase(getTopTenReleasedThisWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getRecommendations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredPlaylists = action.payload;
        console.log(action.payload);
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getGenres.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default spotifySlice.reducer;
