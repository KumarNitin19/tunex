import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  addToRecentSongs,
  CurrentTrack,
  getReleasedThisWeek,
  setCurrentTrack,
} from "../../store/spotifySlice";
import SongListItem from "../../molecules/SongListItem";

const ReleasedThisWeek = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { releasedThisWeek } = useSelector((state: RootState) => state.spotify);

  useEffect(() => {
    dispatch(getReleasedThisWeek());
  }, [dispatch]);

  const handlePlayTrack = useCallback(
    (track: CurrentTrack) => {
      dispatch(addToRecentSongs(track));
      dispatch(
        setCurrentTrack({
          id: track?.id,
          name: track?.name,
          artists: track?.artists,
          image: track?.image,
        })
      );
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col md:p-6  divide-y dark:divide-[#535353]">
      {releasedThisWeek.map((song) => (
        <SongListItem
          key={song?.id}
          song={song}
          handlePlayTrack={handlePlayTrack}
        />
      ))}
    </div>
  );
};

export default ReleasedThisWeek;
