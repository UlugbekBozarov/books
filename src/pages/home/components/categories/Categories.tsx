import { IconButton, Input, Typography } from "library";
import { Close } from "assets/icons";

import {
  CategoriesContent,
  CategoryItem,
  CategoryList,
  CategorySearch,
  Header,
} from "./Categories.style";

const Categories = () => {
  return (
    <CategoriesContent>
      <Header>
        <Typography component="h4" color="white">
          Kategoriyalar
        </Typography>
        <IconButton className="close-icon-button">
          <Close />
        </IconButton>
      </Header>
      <CategoryList>
        <CategorySearch>
          <Input fullWidth placeholder="Search..." />
        </CategorySearch>
        {[...Array.from({ length: 20 })]?.map((_: any, index: number) => (
          <CategoryItem key={index}>Badiiy kitoblar</CategoryItem>
        ))}
      </CategoryList>
    </CategoriesContent>
  );
};

export default Categories;
