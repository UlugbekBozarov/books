import styled from "@emotion/styled";
import { get } from "lodash";

export const SubjectFilter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
});

export const SubjectList = styled("ul")({
  width: "100%",
  listStyle: "none",
  paddingBottom: "20px",
});

export const SubjectItem = styled("li")(({ theme }) => ({
  position: "relative",
  minHeight: "50px",
  cursor: "pointer",
  padding: "6px 16px",
  display: "flex",
  alignItems: "center",
  borderRadius: get(theme, "shape.borderRadius"),
  // borderBottom: `1px solid ${get(theme, "color.border")}`,
  "&::after": {
    content: '""',
  },
  "&:nth-child(2n + 1)": {
    background: "rgba(0, 0, 0, 0.06)",
  },
  "&:hover": {
    background: get(theme, "color.bgHover"),
  },
}));
