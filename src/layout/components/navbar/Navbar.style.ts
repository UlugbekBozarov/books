import styled from "@emotion/styled";
import { get } from "lodash";

export const AppBar = styled("header")(({ theme }) => ({
  position: "sticky",
  width: "100%",
  height: "74px",
  background: get(theme, "color.background"),
  top: 0,
  zIndex: 1100,
}));

export const Nav = styled("nav")(({ theme }) => ({
  width: "100%",
  height: "74px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${get(theme, "color.border")}`,
}));

export const Brand = styled("div")({});

export const List = styled("ul")({
  listStyle: "none",
  display: "flex",
  gap: "15px",
});

export const Item = styled("li")({});
