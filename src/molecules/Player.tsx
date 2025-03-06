import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@iconify/react";
import { AppDispatch, RootState } from "../store/store";
import { useCallback } from "react";
import { setCurrentTrack } from "../store/spotifySlice";

const Player = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentTrack } = useSelector((state: RootState) => state.spotify);
  const progress = 50;
  const volume = 50;

  const hidePlayer = useCallback(() => {
    dispatch(setCurrentTrack(null));
  }, []);

  if (!currentTrack) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-lg p-4 flex flex-col md:flex-row rounded-t-lg md:rounded-t-none md:items-center gap-6 md:gap-12 transition-all duration-300 z-[99]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${currentTrack.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        role="button"
        className="absolute md:hidden right-5 bg-white rounded-full"
        onClick={hidePlayer}>
        <Icon icon="material-symbols:close-rounded" fontSize={24} />
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <img
          src={currentTrack.image}
          alt={currentTrack.name}
          className="w-14 h-14 rounded-full shadow-lg"
        />
        <div>
          <p className="text-white font-semibold">{currentTrack.name}</p>
          <p className="text-gray-300 text-sm">{currentTrack.artists}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 items-center w-full shrink-0">
        <div className="w-full h-[10px] bg-[#0009] cursor-pointer overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-gray-300 hover:text-white transition">
            <Icon icon="material-symbols:skip-previous-rounded" width="28" />
          </button>
          <button className="text-gray-300 hover:text-white transition">
            <Icon icon="material-symbols:play-arrow-rounded" width="32" />
          </button>
          <button className="text-gray-300 hover:text-white transition">
            <Icon icon="material-symbols:skip-next-rounded" width="28" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5 min-w-0 md:w-[20%]">
        <Icon
          icon="material-symbols:volume-up-rounded"
          width="24"
          className="text-gray-300"
        />
        <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${volume}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
