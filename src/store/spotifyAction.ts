import { privateApiClient } from "../utils/apiUtils";

export const getTopTenReleasedThisWeekAsync = () =>
  privateApiClient.get("/browse/new-releases?limit=10");

export const getRecommendationsAsync = () =>
  privateApiClient.get(
    "/albums/?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
  );

export const getGenersAsync = () => privateApiClient.get("/browse/categories");
