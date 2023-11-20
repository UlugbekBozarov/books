import styled from "@emotion/styled";
import { get } from "lodash";

export const CategoriesContent = styled("div")(({ theme }: any) => ({
  position: "absolute",
  left: "-110%",
  top: 0,
  overflow: "hidden",
  width: "100%",
  height: "100vh",
  maxHeight: "100vh",
  transition: "all 0.3s",
  background: get(theme, "color.background"),
  zIndex: 1200,
  "&.show": {
    left: 0,
  },
  [get(theme, "breakpoints.up")("sm")]: {
    maxWidth: "400px",
  },
  [get(theme, "breakpoints.up")("md")]: {
    position: "sticky",
    top: "104px",
    width: "300px",
    height: "auto",
    maxHeight: "calc(100vh - 168px)",
    minHeight: "400px",
    borderRadius: get(theme, "shape.borderRadius"),
    border: `1px solid  ${get(theme, "color.border")}`,
    marginTop: "30px",
  },
}));

export const Header = styled("div")(({ theme }: any) => ({
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: get(theme, "color.white"),
  background: get(theme, "color.main"),
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
  borderBottom: `1px solid ${get(theme, "color.border")}`,
  padding: "20px 15px 15px 15px",
  zIndex: 99,
}));

export const CategoryItem = styled("li")(({ theme }: any) => ({
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
  cursor: "pointer",
  "&.active": {
    background: get(theme, "color.bgHover"),
  },
  "&:hover": {
    background: get(theme, "color.bgHover"),
  },
  "&:active": {
    background: get(theme, "color.bgActive"),
  },
}));

export const StyledCheckboxInput = styled("input")({
  width: "16px",
  height: "16px",
  marginRight: "10px",
});

export const StyledLeft = styled("div")({
  height: "100%",
  display: "flex",
  alignItems: "center",
});
