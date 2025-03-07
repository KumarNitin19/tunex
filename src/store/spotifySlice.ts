import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGenreAsync,
  getTopTenReleasedThisWeekAsync,
  getAllReleasedThisWeekAsync,
} from "./spotifyAction";
import { GenericArray, GenericObject } from "../commonType";
import { modifyReleaseSongsData } from "../utils/commonUtil";

const MAX_RECENT_SONGS = 20;

export type CurrentTrack = {
  id: string;
  name: string;
  artists: string;
  image: string;
};

export type ReleasedThisWeek = {
  images: { url: string }[];
  name: string;
  id: string;
  artists: { name: string }[];
};

export type SpotifyGenre = {
  icons: { url: string }[];
  href: string;
} & ReleasedThisWeek;

// Define the shape of the state
interface SpotifyState {
  releasedThisWeek: GenericArray<CurrentTrack>;
  featuredPlaylists: GenericArray<GenericObject<string | number>>[];
  genres: GenericArray<{
    id: string;
    name: string;
    href: string;
    image: string;
  }>;
  loading: boolean;
  currentTrack: CurrentTrack | null;
  isPlaying: boolean;
  error: string | null;
  currentGenre: GenericObject<string> | null;
  selectedGenrePlaylist: Array<unknown>;
  playlists: { id: string; name: string; image: string }[];
  recentlyPlayedSongs: CurrentTrack[];
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
  recentlyPlayedSongs: JSON.parse(
    localStorage?.getItem("recentlyPlayedSongs") || "[]"
  ),
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
    addToRecentSongs: (state, action) => {
      const songIndex = state.recentlyPlayedSongs.findIndex(
        (song) => song.id === action.payload.id
      );
      // removing if it's already there
      if (songIndex !== -1) {
        state.recentlyPlayedSongs.splice(songIndex, 1);
      }
      // adding to the front
      state.recentlyPlayedSongs.unshift(action.payload);

      // if size exceeds removing last element
      if (state.recentlyPlayedSongs.length > MAX_RECENT_SONGS) {
        state.recentlyPlayedSongs.pop();
      }
      localStorage.setItem(
        "recentlyPlayedSongs",
        JSON.stringify(state.recentlyPlayedSongs)
      );
    },
    clearRecentSongs: (state) => {
      state.recentlyPlayedSongs = [];
      localStorage.removeItem("recentlyPlayedSongs");
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
        state.genres = action.payload?.map((genre: SpotifyGenre) => ({
          id: genre?.id,
          image: genre?.icons[0]?.url,
          name: genre?.name,
          href: genre?.href,
        }));
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setCurrentTrack,
  setCurrentGenre,
  addToRecentSongs,
  clearRecentSongs,
} = spotifySlice.actions;
export default spotifySlice.reducer;
