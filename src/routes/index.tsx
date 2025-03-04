import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const SignInPage = lazy(() => import("../pages/auth/sign-in"));
const SignUpPage = lazy(() => import("../pages/auth/sign-up"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const RefreshSession = lazy(() => import("../pages/refresh-session"));
const ErrorPage = lazy(() => import("../pages/error-page"));

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <Suspense fallback="Loading...">
          <SignInPage />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <Suspense fallback="Loading...">
          <SignUpPage />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Suspense fallback="Loading...">
          <Dashboard />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/refresh-session",
    element: (
      <Suspense fallback="Loading...">
        <RefreshSession />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoute>
        <Suspense fallback="Loading...">
          <ErrorPage />
        </Suspense>
      </PublicRoute>
    ),
  },
]);

export default router;
