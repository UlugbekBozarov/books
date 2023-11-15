import styled from "@emotion/styled";

export const AppBar = styled("header")({
  position: "sticky",
  width: "100%",
  height: "74px",
  top: 0,
});

export const Nav = styled("nav")({
  width: "100%",
  height: "74px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid`,
});

export const Brand = styled("div")({});

export const List = styled("ul")({
  listStyle: "none",
  display: "flex",
  gap: "15px",
});

export const Item = styled("li")({});
