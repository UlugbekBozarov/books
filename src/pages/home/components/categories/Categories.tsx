import { ChangeEvent, FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { debounce, get } from "lodash";

import { IconButton, Input, Typography } from "library";
import { Close, Search } from "assets/icons";
import { client } from "services/api";

import {
  CategoriesContent,
  CategoryItem,
  CategoryList,
  CategorySearch,
  Header,
  StyledLeft,
} from "./Categories.style";

interface CategoriesProps {
  open: boolean;
  onClose: () => void;
}

const Categories: FC<CategoriesProps> = ({ open, onClose }) => {
  const theme = useTheme();
  let [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState({
    status: "loading",
    data: [],
  });

  const getCategories = (search?: string) => {
    client
      .get("categories/all", {
        params: {
          search,
        },
      })
      .then((response: any) => {
        setCategories({
          status: "success",
          data: response,
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleChangeInput = debounce((event: ChangeEvent<HTMLInputElement>) => {
    getCategories(get(event, "target.value"));
  }, 300);

  const handleClickCategory = (category: any) =>
    debounce(() => {
      if (
        searchParams.get("categoryId") !==
        (category !== null ? get(category, "id") : null)
      ) {
        setSearchParams((params) => {
          if (category !== null) {
            params.set("categoryId", get(category, "id"));
          } else {
            params.delete("categoryId");
          }
          return params;
        });
      }
    }, 300);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContent className={open ? "show" : ""}>
      <Header>
        <Typography component="h4" color="white">
          Kategoriyalar
        </Typography>
        <IconButton className="close-icon-button" onClick={onClose}>
          <Close stroke={get(theme, "color.contrastText")} />
        </IconButton>
      </Header>
      <CategoryList>
        <CategorySearch>
          <Input
            fullWidth
            onChange={handleChangeInput}
            startIcon={<Search />}
            placeholder="Search..."
          />
        </CategorySearch>
        <CategoryItem
          className={searchParams.get("categoryId") === null ? "active" : ""}
          onClick={handleClickCategory(null)}
        >
          <StyledLeft>Barchasi</StyledLeft>
        </CategoryItem>
        {get(categories, "status") === "loading"
          ? "Loading..."
          : get(categories, "status") === "error"
          ? "Error"
          : get(categories, "data", [])?.map((category: any) => (
              <CategoryItem
                className={
                  searchParams.get("categoryId") === get(category, "id")
                    ? "active"
                    : ""
                }
                onClick={handleClickCategory(category)}
                key={get(category, "id")}
              >
                <StyledLeft>
                  {/* <StyledCheckboxInput type="checkbox" /> */}
                  {get(category, "name")}
                </StyledLeft>
                <Typography component="small">
                  {get(category, "booksCount")}
                </Typography>
              </CategoryItem>
            ))}
      </CategoryList>
    </CategoriesContent>
  );
};

export default Categories;
