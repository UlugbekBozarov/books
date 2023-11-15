import styled from "@emotion/styled";
import { get } from "lodash";

export const CategoriesContent = styled("div")(({ theme }: any) => ({
  position: "absolute",
  overflow: "hidden",
  width: "100%",
  maxWidth: "400px",
  height: "100vh",
  maxHeight: "100vh",
  left: "-110%",
  top: 0,
  [get(theme, "breakpoints.up")("md")]: {
    position: "sticky",
    top: "104px",
    width: "300px",
    height: "auto",
    maxHeight: "calc(100vh - 168px)",
    minHeight: "400px",
    borderRadius: get(theme, "shape.borderRadius"),
    border: `1px solid`,
  },
}));

export const Header = styled("div")(({ theme }: any) => ({
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: `rgb(${get(theme, "color.white")})`,
  background: `rgb(${get(theme, "color.main")})`,
  padding: "5px 20px",
  [get(theme, "breakpoints.up")("md")]: {
    "& .close-icon-button": {
      display: "none",
    },
  },
}));

export const CategoryList = styled("ul")(({ theme }: any) => ({
  position: "relative",
  height: "calc(100% - 64px)",
  maxHeight: "calc(100vh)",
  overflowY: "auto",
  listStyle: "none",
  paddingBottom: "20px",
  [get(theme, "breakpoints.up")("md")]: {
    maxHeight: "calc(100% - 64px)",
  },
}));

export const CategorySearch = styled("li")(({ theme }: any) => ({
  position: "sticky",
  top: 0,
  height: "75px",
  background: `rgb(${get(theme, "color.white")})`,
  borderBottom: `1px solid`,
  padding: "20px 15px 15px 15px",
  zIndex: 99,
}));

export const CategoryItem = styled("li")(({ theme }: any) => ({
  height: "40px",
  display: "flex",
  alignItems: "center",
  padding: "5px 20px",
  cursor: "pointer",
  "&:hover": {
    background: `rgba(${get(theme, "color.black")}, 0.04)`,
  },
}));
