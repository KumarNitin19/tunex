# TuneX - Spotify Clone

TuneX is a Spotify-powered music application which provides features like **new releases**, **browsing genres**, and a **recently played section** managed via an LRU cache.

## Tech Stack

- **Framework**: React (TypeScript)
- **State Management**: Redux Toolkit
- **UI Styling**: Tailwind CSS
- **Routing**: React Router
- **Authentication**: Spotify OAuth
- **Backend API**: Spotify Web API
- **Deployment**: Vercel

## Features Implemented

- **User Authentication** via Spotify OAuth
- **Dashboard with Three Sections**:
  - New Releases (Limited to 10 items)
  - Browse Genres (Limited to 5 categories)
  - Recently Played (LRU Cache using LocalStorage)
- **Static Music Player UI** (Since actual playback requires a premium Spotify account)
- **Sidebar Navigation** with pages:
  - Weekly Releases
  - Browse Genres
  - Recently Played

## Folder Structure

```
/src
 ├── atoms               # UI components (Button, Icon, Loader, etc.)
 ├── molecules           # Reusable components (Player, Sidebar, Banner, etc.)
 ├── hooks               # Custom hooks (useLocalStorage, useTheme, etc.)
 ├── layout              # Page layouts with sidebar
 ├── pages               # Individual feature pages (Dashboard, Genres, Weekly Releases, etc.)
 ├── provider            # Theme provider for managing dark/light mode
 ├── routes              # App routing with Private and Public routes
 ├── store               # Redux store, slices, and actions
 ├── utils               # Utility functions
 ├── App.tsx             # Root component
 ├── main.tsx            # Entry point
```

### Installation

```sh
git clone https://github.com/KumarNitin19/tunex.git
cd tuneX
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_SPOTIFY_CLIENT_ID=aaa12e2e7a574a33b6c1f869fa3e0935
VITE_APP_REDIRECT_URI=http://localhost:5173/
VITE_APP_SPOTIFY_URI=https://accounts.spotify.com/authorize
VITE_APP_SPOTIFY_APP_BASE_URI=https://api.spotify.com/v1
```

### Run the App

```sh
npm run dev
```

## Technical Decisions

### 1. **Why Redux Toolkit?**

Since the requirement specified Redux, I used Redux Toolkit for better state management and API handling using `createAsyncThunk`.

### 2. **Atomic Design Methodology**

To keep the UI scalable and reusable, I structured components into **atoms** (buttons, icons), **molecules** (player, sidebar), and **organisms** (full sections).

### 3. **Spotify API Challenges**

- Some endpoints are **deprecated or restricted to premium users**, so I focused on:
  - `/browse/new-releases` (for new songs)
  - `/browse/categories` (for genre listings)
- Implemented an **LRU Cache** using LocalStorage to maintain a recently played section.

### 4. **Error Handling**

- **Invalid API calls** return proper error messages
- **Unauthorized users** are redirected to the login page

### 5. **Theming Strategy**

- **Tailwind CSS + Custom Theme Provider**
- Dark/light mode toggle available

## Future Improvements

- Integrate a **real-time music player** (if Spotify API limitations are resolved)
- Implement **search functionality**
- Add **user-created playlists**
