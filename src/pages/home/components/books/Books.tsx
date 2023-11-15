import React from "react";
import { BookCard, BooksContent, Content, ImageBlock } from "./Books.style";
import { Typography } from "library";

const Books = () => {
  return (
    <BooksContent>
      {[...Array.from({ length: 20 })].map((book: any, index: number) => (
        <BookCard key={index}>
          <ImageBlock>Image</ImageBlock>
          <Content>
            <Typography component="h4">Title</Typography>
            <Typography component="p">Description</Typography>
          </Content>
        </BookCard>
      ))}
    </BooksContent>
  );
};

export default Books;
