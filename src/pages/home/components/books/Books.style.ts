import styled from "@emotion/styled";
import { get } from "lodash";

export const BooksContent = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export const BookCard = styled("div")(({ theme }) => ({
  display: "flex",
  width: "calc(50% - 10px)",
  marginBottom: "20px",
  border: `1px solid`,
  borderRadius: get(theme, "shape.borderRadius"),
  padding: "10px",
  "&:nth-child(2n + 1)": {
    marginRight: "20px",
  },
}));

export const ImageBlock = styled("div")(({ theme }: any) => ({
  width: "100px",
  minHeight: "100px",
  padding: "10px",
  border: `1px solid`,
  borderRadius: get(theme, "shape.borderRadius"),
  marginRight: "15px",
}));
export const Content = styled("div")({});
