import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useMemo } from "react";
import {
  getRecommendations,
  getGenres,
  getTopTenReleasedThisWeek,
} from "../../store/spotifySlice";
import GridSection from "../../molecules/GridSection";
import { GenericObject } from "../../commonType";
import Banner from "../../molecules/Banner";

const Dashboard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { releasedThisWeek, genres } = useSelector(
    (state: RootState) => state.spotify
  );

  useEffect(() => {
    dispatch(getTopTenReleasedThisWeek());
    dispatch(getRecommendations());
    dispatch(getGenres());
  }, [dispatch]);

  const firstElementFromReleased = useMemo(
    () => ({
      image: releasedThisWeek[0]?.images[0]?.url,
      name: releasedThisWeek[0]?.name,
      id: releasedThisWeek[0]?.id,
    }),
    [releasedThisWeek]
  );

  const allReleaseElements = useMemo(
    () =>
      releasedThisWeek?.filter(
        (album: GenericObject<string | number>) =>
          album?.id !== firstElementFromReleased?.id
      ),
    [releasedThisWeek, firstElementFromReleased]
  );

  console.log(genres);

  return (
    <div className="text-text-light dark:text-text-dark">
      <Banner item={firstElementFromReleased} />

      {/* Sections */}
      <div className="mt-8 space-y-8">
        {/* Released This Week */}
        <GridSection
          title="Released This Week"
          listItems={allReleaseElements?.map(
            (el: GenericObject<string | number>) => ({
              image: el?.images[0]?.url || "",
              name: el?.name,
              id: el?.id,
            })
          )}
          onViewAll={() => navigate("/released-this-week")}
        />

        {/* Browse Genres */}
        <GridSection
          title="Browse Genres"
          listItems={genres?.map((genre) => ({
            id: genre?.id,
            image: genre?.icons[0]?.url,
            name: genre?.name,
          }))}
          onViewAll={() => navigate("/browse-genres")}
        />

        {/* Recommendations */}
        <GridSection
          title="Recommendations"
          listItems={genres}
          onViewAll={() => navigate("/browse-genres")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
