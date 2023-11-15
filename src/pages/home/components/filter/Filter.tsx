import React from "react";
import { FilterContent } from "./Filter.style";
import { Button, Input } from "library";

const Filter = () => {
  return (
    <FilterContent>
      <Button>Filter</Button>
      <Input placeholder="Search..." />
    </FilterContent>
  );
};

export default Filter;
