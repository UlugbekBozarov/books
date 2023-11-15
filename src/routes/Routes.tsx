import { getItemCookie } from "services/storage";
import { STORAGE_NAMES } from "constants/Storage.constants";

import PrivateRouts from "./private/PrivateRouts";
import PublicRouts from "./public/PublicRouts";

const Routes = () => {
  if (getItemCookie(STORAGE_NAMES.authorization)) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
