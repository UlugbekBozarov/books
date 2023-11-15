import { Container } from "library";
import { BooksContent, HomeContent } from "./Home.style";
import { Books, Categories, Filter } from "./components";

const Home = () => {
  return (
    <Container>
      <HomeContent>
        <Categories />
        <BooksContent>
          <Filter />
          <Books />
        </BooksContent>
      </HomeContent>
    </Container>
  );
};

export default Home;
