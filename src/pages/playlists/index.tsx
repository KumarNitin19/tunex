import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridTile from "../../molecules/GridTile";
import SongList from "../../molecules/SongListItem";
import { RootState } from "../../store/store";

const PlayLists: React.FC = () => {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state: RootState) => state.spotify); // Adjust type

  // useEffect(() => {
  //   // Fetch playlists when the component mounts (replace with your actual API call)
  //   const fetchPlaylists = async () => {
  //     const response = await fetch("/api/user/playlists");
  //     const data = await response.json();
  //     dispatch(setPlaylists(data));
  //   };

  //   fetchPlaylists();
  // }, [dispatch]);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlists.map((playlist: any) => (
          <GridTile key={playlist.id} {...playlist} />
        ))}
      </div>

      <h2 className="text-base font-medium mt-8">Songs in Selected Playlist</h2>
      {/* <SongList /> */}
    </div>
  );
};

export default PlayLists;
