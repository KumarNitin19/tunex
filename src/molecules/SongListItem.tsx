import { Icon } from "../atoms/Icon";
import { CurrentTrack } from "../store/spotifySlice";

type Props = {
  song: CurrentTrack;
  handlePlayTrack: (song: CurrentTrack) => void;
};

const SongListItem: React.FC<Props> = ({ song, handlePlayTrack }) => {
  if (!song)
    return (
      <p className="text-main-text-light dark:text-main-text-dark font-medium text-sm md:text-sm truncate">
        No Song Found
      </p>
    );

  return (
    <div
      key={song.id}
      className="group flex items-center gap-3 p-2 md:p-3 cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-black/10 dark:hover:shadow-white/10"
      onClick={() => handlePlayTrack(song)}>
      <img
        src={song.image}
        alt={song.name}
        className="w-10 h-10 md:w-12 md:h-12 rounded-md object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="text-black dark:text-white font-medium text-sm md:text-sm truncate">
          {song.name}
        </p>
        <p className="text-sub-text-light dark:text-sub-text-dark text-xs md:text-xs truncate">
          {song.artists}
        </p>
      </div>
      <button className="opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <Icon
          icon="material-symbols:play-arrow-rounded"
          className="text-black dark:text-white text-xl md:text-2xl"
        />
      </button>
    </div>
  );
};

export default SongListItem;
