import styled from "@emotion/styled";
import { get } from "lodash";

export const BooksContent = styled("div")({
  paddingBottom: "20px",
});

export const BookCard = styled("div")(({ theme }) => ({
  display: "flex",
  border: `1px solid  ${get(theme, "color.border")}`,
  // background: get(theme, "color.backgroundDark"),
  borderRadius: get(theme, "shape.borderRadius"),
  padding: "10px",
  cursor: "pointer",
  "&:hover": {
    background: get(theme, "color.bgHover"),
  },
}));

export const ImageBlock = styled("div")(({ theme }: any) => ({
  width: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100px",
  padding: "10px",
  border: `1px solid ${get(theme, "color.border")}`,
  borderRadius: get(theme, "shape.borderRadius"),
  marginRight: "15px",
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
export const Content = styled("div")({});
