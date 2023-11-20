import styled from "@emotion/styled";
import { get } from "lodash";

export const FilterContent = styled("div")(({ theme }: any) => ({
  position: "sticky",
  top: "74px",
  display: "flex",
  justifyContent: "space-between",
  background: get(theme, "color.background"),
  paddingTop: "30px",
  paddingBottom: "10px",
  marginBottom: "10px",
  [get(theme, "breakpoints.up")("md")]: {
    justifyContent: "flex-end",
    "& .Button-root": {
      display: "none",
    },
  },
}));
