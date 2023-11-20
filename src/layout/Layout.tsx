import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "components";

import { Footer, Navbar } from "./components";
import { Main } from "./Layout.style";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
