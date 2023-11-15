import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { Spinner } from "components";
import { ErrorBoundary } from "services/error";

const Layout = lazy(() => import("layout/Layout"));

const Home = lazy(() => import("pages/home/Home"));
const Subjects = lazy(() => import("pages/subjects/Subjects"));
const Content = lazy(() => import("pages/content/Content"));

const SignIn = lazy(() => import("pages/auth/signIn/SignIn"));
const SignUp = lazy(() => import("pages/auth/signUp/SignUp"));

const NotFound = lazy(() => import("pages/404/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "subjects/:bookId",
            element: <Subjects />,
          },
          {
            path: "content/:subjectId",
            element: <Content />,
          },
        ],
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  },
]);

const PublicRouts = () => {
  redirect("/");

  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PublicRouts;
