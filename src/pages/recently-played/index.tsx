import { useCallback } from "react";
import {
  addToRecentSongs,
  CurrentTrack,
  setCurrentTrack,
} from "../../store/spotifySlice";
import { GenericObject } from "../../commonType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

const ListItem = ({
  song,
  handleClick = () => {},
}: {
  song: GenericObject<string>;
  handleClick?: (item: GenericObject<string>) => void;
}) => {
  return (
    <div
      key={song.id}
      className="flex items-center gap-4 p-2 border dark:border-[#535353] rounded-lg cursor-pointer hover:shadow-xl transition-all hover:scale-101"
      onClick={() => handleClick(song)}>
      <img src={song.image} alt={song.name} className="w-20 h-20 rounded-lg" />
      <div className="flex flex-col">
        <p className="text-main-text-light dark:text-main-text-dark text-sm font-medium">
          {song.name}
        </p>
        <p className="text-sub-text-light dark:text-sub-text-dark text-xs">
          {song.artists}
        </p>
      </div>
    </div>
  );
};

const RecentlyPlayed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recentlyPlayedSongs } = useSelector(
    (store: RootState) => store.spotify
  );

  const handlePlayTrack = useCallback(
    (track: GenericObject<string>) => {
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

  return recentlyPlayedSongs?.length === 0 ? (
    <p>No recent songs found.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recentlyPlayedSongs?.map((song: CurrentTrack) => (
        <ListItem key={song.id} song={song} handleClick={handlePlayTrack} />
      ))}
    </div>
  );
};

export default RecentlyPlayed;
