import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useCallback, useEffect, useMemo } from "react";
import {
  getGenres,
  getTopTenReleasedThisWeek,
  setCurrentTrack,
  setCurrentGenre,
  addToRecentSongs,
} from "../../store/spotifySlice";
import GridSection from "../../molecules/GridSection";
import Banner from "../../molecules/Banner";
import { GenericObject } from "../../commonType";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { releasedThisWeek, genres, recentlyPlayedSongs } = useSelector(
    (state: RootState) => state.spotify
  );

  useEffect(() => {
    dispatch(getTopTenReleasedThisWeek());
    dispatch(getGenres());
  }, [dispatch]);

  const firstElementFromReleased = useMemo(
    () => releasedThisWeek[0],
    [releasedThisWeek]
  );

  const allReleaseElements = useMemo(
    () =>
      releasedThisWeek?.filter(
        (album) => album?.id !== firstElementFromReleased?.id
      ),
    [releasedThisWeek, firstElementFromReleased]
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

  const handleGenreClick = useCallback(
    (genre: GenericObject<string>) => {
      dispatch(setCurrentGenre(genre));
      navigate(`/genre`);
    },
    [navigate]
  );

  console.log(genres?.slice(15));

  return (
    <div className="text-text-light dark:text-text-dark">
      <Banner item={firstElementFromReleased} onListeNow={handlePlayTrack} />
      <div className="mt-8 space-y-8">
        <GridSection
          title="Released This Week"
          listItems={allReleaseElements}
          onViewAll={() => navigate("/released-this-week")}
          handleClick={handlePlayTrack}
        />
        <GridSection
          title="Browse Genres"
          listItems={genres?.slice(15)}
          onViewAll={() => navigate("/genres")}
          handleClick={handleGenreClick}
        />

        <GridSection
          title="Recently Played"
          listItems={recentlyPlayedSongs}
          onViewAll={() => navigate("/recently-played")}
          handleClick={handleGenreClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;
