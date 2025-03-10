import { ReleasedThisWeek } from "../store/spotifySlice";

// Modify new-release data because most of the keys we don't needed
export const modifyReleaseSongsData = (data: ReleasedThisWeek[]) =>
  data?.map((track: ReleasedThisWeek) => ({
    image: track?.images[0]?.url,
    name: track?.name,
    id: track?.id,
    artists: track?.artists?.map((artist) => artist?.name)?.join(", "),
  }));
