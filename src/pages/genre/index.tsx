import { useEffect } from "react";
import GridTile from "../../molecules/GridTile";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/spotifySlice";

// Genre Page
const GenrePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { genres } = useSelector((state: RootState) => state.spotify);

  // Fetch all genres
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return genres?.length ? (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {genres?.map((genre) => (
        <GridTile key={genre?.id} item={genre} />
      ))}
    </div>
  ) : (
    <p className="text-main-text-light dark:text-main-text-dark font-medium text-sm md:text-sm truncate">
      No genres found.
    </p>
  );
};

export default GenrePage;
