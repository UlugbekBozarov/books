import styled from "@emotion/styled";

export const HomeContent = styled("div")({
  minHeight: "calc(100vh - 168px)",
  display: "flex",
  marginTop: "30px",
});

export const BooksContent = styled("div")(({ theme }: any) => ({
  [theme?.breakpoints?.up("md")]: {
    width: "calc(100% - 300px)",
    paddingLeft: "20px",
  },
}));
