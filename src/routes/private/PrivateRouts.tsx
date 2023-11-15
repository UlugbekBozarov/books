import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Spinner } from "components";
import { ErrorBoundary } from "services/error";

const Layout = lazy(() => import("layout/Layout"));
const NotFound = lazy(() => import("pages/404/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/books",
      //   element: <BooksList />,
      // },
      // {
      //   path: "/books/add",
      //   element: <BooksAddOrEdit />,
      // },
      // {
      //   path: "/books/info/:bookId",
      //   element: <BooksInfo />,
      // },
      // {
      //   path: "/books/edit/:bookId",
      //   element: <BooksAddOrEdit />,
      // },
      // {
      //   path: "/books/:bookId/topic",
      //   element: <TopicList />,
      // },
      // {
      //   path: "/books/:bookId/topic/add",
      //   element: <TopicAddOrEdit />,
      // },
      // {
      //   path: "/books/:bookId/topic/info/:topicId",
      //   element: <TopicInfo />,
      // },
      // {
      //   path: "/books/:bookId/topic/edit/:topicId",
      //   element: <TopicAddOrEdit />,
      // },
      // {
      //   path: "/categories",
      //   element: <CategoriesList />,
      // },
      // {
      //   path: "/categories/add",
      //   element: <CategoriesAddOrEdit />,
      // },
      // {
      //   path: "/categories/edit/:categoryId",
      //   element: <CategoriesAddOrEdit />,
      // },
      // {
      //   path: "/tests",
      //   element: <TestList />,
      // },
      // {
      //   path: "/test/info/:testId",
      //   element: <TestInfo />,
      // },
      // {
      //   path: "/tests/add",
      //   element: <TestAddOrEdit />,
      // },
      // {
      //   path: "/tests/edit/:testId",
      //   element: <TestAddOrEdit />,
      // },
      // {
      //   path: "settings",
      //   element: <Settings />,
      // },
      // {
      //   path: "settings/languages",
      //   element: <LanguagesList />,
      // },
      // {
      //   path: "settings/languages/add",
      //   element: <LanguageAddOrEdit />,
      // },
      // {
      //   path: "settings/languages/edit/:languageId",
      //   element: <LanguageAddOrEdit />,
      // },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

const PrivateRouts = () => {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PrivateRouts;
