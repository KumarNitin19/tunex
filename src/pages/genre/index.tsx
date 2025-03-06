import React, { useEffect } from "react";
import GridTile from "../../molecules/GridTile";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/spotifySlice";

const GenrePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { genres } = useSelector((state: RootState) => state.spotify);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {genres?.map((genre) => (
        <GridTile key={genre?.id} item={genre} />
      ))}
    </div>
  );
};

export default GenrePage;
