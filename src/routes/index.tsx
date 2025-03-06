import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import WithSidebar from "../layout/WithSidebar";
import Loader from "../atoms/Loader";

const SignUpPage = lazy(() => import("../pages/auth/sign-up"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const ReleasedThisWeek = lazy(() => import("../pages/released-this-week"));
// const ReleasedThisWeek = lazy(() => import("../pages/released-this-week"));
const Playlist = lazy(() => import("../pages/playlists"));
const ErrorPage = lazy(() => import("../pages/error-page"));

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader loading={true} />}>
          <SignUpPage />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader loading={true} />}>
          <WithSidebar>
            <Dashboard />
          </WithSidebar>
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/released-this-week",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader loading={true} />}>
          <WithSidebar>
            <ReleasedThisWeek />
          </WithSidebar>
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/genre",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader loading={true} />}>
          <WithSidebar>
            <ReleasedThisWeek />
          </WithSidebar>
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/your-playlist",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader loading={true} />}>
          <WithSidebar>
            <Playlist />
          </WithSidebar>
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader loading={true} />}>
          <ErrorPage />
        </Suspense>
      </PublicRoute>
    ),
  },
]);

export default router;
