import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGenreAsync,
  getTopTenReleasedThisWeekAsync,
  getAllReleasedThisWeekAsync,
} from "./spotifyAction";
import { GenericArray, GenericObject } from "../commonType";
import { modifyReleaseSongsData } from "../utils/commonUtil";

export type CurrentTrack = {
  id: string;
  name: string;
  artists: string;
  image: string;
} | null;

export type ReleasedThisWeek = {
  images: { url: string }[];
  name: string;
  id: string;
  artists: { name: string }[];
};

// Define the shape of the state
interface SpotifyState {
  releasedThisWeek: GenericArray<{
    image: string;
    name: string;
    id: string;
    artists: string;
  }>;
  featuredPlaylists: GenericArray<GenericObject<string | number>>[];
  genres: GenericArray<GenericObject<string | number>>[];
  loading: boolean;
  currentTrack: CurrentTrack;
  isPlaying: boolean;
  error: string | null;
  currentGenre: GenericObject<string> | null;
  selectedGenrePlaylist: Array<unknown>;
  playlists: { id: string; name: string; image: string }[];
  selectedPlaylist: string | null;
}

// Initial state
const initialState: SpotifyState = {
  releasedThisWeek: [],
  featuredPlaylists: [],
  genres: [],
  loading: false,
  currentTrack: null,
  isPlaying: false,
  error: null,
  currentGenre: null,
  selectedGenrePlaylist: [],
  playlists: [],
  selectedPlaylist: null,
};

// Fetch Released This Week Songs
export const getTopTenReleasedThisWeek = createAsyncThunk(
  "spotify/getTopTenReleasedThisWeek",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTopTenReleasedThisWeekAsync();
      return response.data.albums.items;
    } catch (error: unknown) {
      console.log(error);
      return rejectWithValue(error || "Error fetching data");
    }
  }
);

// Fetch Released This Week Songs
export const getReleasedThisWeek = createAsyncThunk(
  "spotify/getReleasedThisWeek",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllReleasedThisWeekAsync();
      return response.data.albums.items;
    } catch (error: unknown) {
      console.log(error);
      return rejectWithValue(error || "Error fetching data");
    }
  }
);

// Fetch Genres
export const getGenres = createAsyncThunk(
  "spotify/getGenres",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getGenreAsync();
      return response.data.categories.items;
    } catch (error: unknown) {
      return rejectWithValue(error || "Error fetching data");
    }
  }
);

// // Fetch Users Playlist
// export const get = createAsyncThunk(
//   "spotify/getGenres",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getGenreAsync();
//       return response.data.categories.items;
//     } catch (error: unknown) {
//       return rejectWithValue(error || "Error fetching data");
//     }
//   }
// );

// Redux Slice
const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setCurrentGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    setSelectedPlaylist: (state, action) => {
      state.selectedPlaylist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopTenReleasedThisWeek.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopTenReleasedThisWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.releasedThisWeek = modifyReleaseSongsData(action.payload);
      })
      .addCase(getTopTenReleasedThisWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getReleasedThisWeek.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReleasedThisWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.releasedThisWeek = modifyReleaseSongsData(action.payload);
      })
      .addCase(getReleasedThisWeek.rejected, (state, action) => {
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

export const { setCurrentTrack, setCurrentGenre } = spotifySlice.actions;
export default spotifySlice.reducer;
