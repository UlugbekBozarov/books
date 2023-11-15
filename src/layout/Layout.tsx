import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "components";

import { Footer, Navbar } from "./components";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
