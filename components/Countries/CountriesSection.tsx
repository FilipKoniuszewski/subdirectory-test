import { FunctionComponent, useState } from "react";
import { Filter, FilterOptions } from "../Filter/Filter";
import { Searchbar } from "../Searchbar/Searchbar";
import { Countries } from "./Countries";

import "./CountriesSection.scss";

export const CountriesSection: FunctionComponent = () => {
  const [userInput, setUserInput] = useState<string>("");

  const [filter, setFilter] = useState<FilterOptions>(FilterOptions.All);

  const onInputChange = (input: string) => {
    setUserInput(input);
  };

  const onFilterChange = (filter: FilterOptions) => {
    setFilter(filter);
  };

  return (
    <main className='countries__section'>
      <div className='search__section'>
        <Searchbar onChange={onInputChange} />
        <Filter onChange={onFilterChange} filter={filter} />
      </div>
      <Countries input={userInput} filter={filter} />
    </main>
  );
};
