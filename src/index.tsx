import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Spinner } from "components";

import App from "./App";
import "./i18n";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
