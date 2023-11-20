import { ChangeEvent, FC } from "react";

import { Button, Input } from "library";
import { Filter as FilterIcon, Search } from "assets/icons";

import { FilterContent } from "./Filter.style";
import { debounce, get } from "lodash";
import { useSearchParams } from "react-router-dom";

const Filter: FC<{
  onOpen: () => void;
}> = ({ onOpen }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const onInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((params) => {
      if (get(event, "target.value") !== "") {
        params.set("search", get(event, "target.value"));
      } else {
        params.delete("search");
      }
      return params;
    });
  }, 300);

  return (
    <FilterContent>
      <Button onClick={onOpen} startIcon={<FilterIcon />}>
        Saralash
      </Button>
      <Input
        defaultValue={searchParams.get("search") || ""}
        startIcon={<Search />}
        onChange={onInputChange}
        placeholder="Search..."
      />
    </FilterContent>
  );
};

export default Filter;
