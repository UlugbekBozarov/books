import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

import { Grid, Typography } from "library";

import { BookCard, BooksContent, Content, ImageBlock } from "./Books.style";

const Books: FC<{
  books: {
    status: "loading" | "success" | "error";
    data: [];
  };
}> = ({ books }) => {
  const navigate = useNavigate();

  const handleClickBook = (bookId: string) => () => {
    navigate(`/subjects/${bookId}`);
  };

  return (
    <BooksContent>
      <Grid container spacing={2}>
        {get(books, "status") === "loading" ? (
          <Grid item>Loading...</Grid>
        ) : get(books, "status") === "error" ? (
          <Grid item>Error</Grid>
        ) : (
          get(books, "data", [])?.map((book: any, index: number) => (
            <Grid item xs={12} md={12} lg={6}>
              <BookCard
                onClick={handleClickBook(get(book, "id"))}
                key={get(book, "id")}
              >
                <ImageBlock>
                  {get(book, "image") ? (
                    <img
                      src={`${process.env.REACT_APP_IMAGE_BASE_URL}images/${get(
                        book,
                        "image"
                      )}`}
                      alt={get(book, "name")}
                    />
                  ) : (
                    <div>img</div>
                  )}
                </ImageBlock>
                <Content>
                  <Typography component="h4">{get(book, "name")}</Typography>
                  <Typography component="p">
                    {get(book, "description")}
                  </Typography>
                </Content>
              </BookCard>
            </Grid>
          ))
        )}
      </Grid>
    </BooksContent>
  );
};

export default Books;
