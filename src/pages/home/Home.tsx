import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { get } from "lodash";

import { Container } from "library";
import { client } from "services/api";

import { BooksContent, HomeContent } from "./Home.style";
import { Books, Categories, Filter } from "./components";

const Home = () => {
  const location = useLocation();
  let [searchParams] = useSearchParams();

  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<{
    status: "loading" | "success" | "error";
    data: [];
  }>({
    status: "loading",
    data: [],
  });

  const getBooks = (categoryId?: string, search?: string) => {
    client
      .get("books", {
        params: {
          page: 1,
          limit: 20,
          categoryId,
          search,
        },
      })
      .then((response: any) => {
        setBooks({
          status: "success",
          data: get(response, "content", []),
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleOpen = () => {
    setFilterOpen(true);
  };

  const handleClose = () => {
    setFilterOpen(false);
  };

  useEffect(() => {
    getBooks(
      searchParams.get("categoryId") || undefined,
      searchParams.get("search") || undefined
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Container>
      <HomeContent>
        <Categories open={filterOpen} onClose={handleClose} />
        <BooksContent>
          <Filter onOpen={handleOpen} />
          <Books books={books} />
        </BooksContent>
      </HomeContent>
    </Container>
  );
};

export default Home;
