import { privateApiClient } from "../utils/apiUtils";

export const getTopTenReleasedThisWeekAsync = () => {
  return privateApiClient.get("/browse/new-releases?limit=10");
};

export const getAllReleasedThisWeekAsync = () => {
  return privateApiClient.get("/browse/new-releases");
};

export const getGenreAsync = () => {
  return privateApiClient.get("/browse/categories");
};
