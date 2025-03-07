import axios from "axios";

// Axios interceptor to handle authorization
export const privateApiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_SPOTIFY_APP_BASE_URI,
});

privateApiClient.interceptors.request.use(async (config) => {
  const spotifyToken = JSON.parse(localStorage.getItem("spotify-token") || "");

  config.headers["Authorization"] = `Bearer ${spotifyToken}`;

  return config;
});

privateApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      window.location.pathname = "/sign-up";
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
