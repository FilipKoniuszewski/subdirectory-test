import { FunctionComponent } from "react";

import useCountriesApi from "../../hooks/useCountriesApi";
import { CountryCard } from "../CountryCard/CountryCard";
import { FilterOptions } from "../Filter/Filter";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";

export type CountriesProps = {
  input: string;
  filter: FilterOptions;
};
export const Countries: FunctionComponent<CountriesProps> = ({
  input,
  filter,
}) => {
  const url = input
    ? `https://restcountries.com/v2/name/${input}`
    : "https://restcountries.com/v2/all";

  const { countries, loading } = useCountriesApi(url);

  const countriesList = !countries.length
    ? []
    : filter === FilterOptions.All
    ? countries
    : countries.filter((country) => country.region === filter);

  return (
    <>
      {loading && <LoadingIndicator />}
      <div className='countries__box'>
        {countriesList.length &&
          countriesList.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
      </div>
    </>
  );
};
