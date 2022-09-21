import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useCountriesApi from "../../hooks/useCountriesApi";

type BorderCountriesProps = {
  borders: string[];
};

export const BorderCountries: FunctionComponent<BorderCountriesProps> = ({
  borders,
}) => {
  const { countries } = useCountriesApi("https://restcountries.com/v2/all");

  if (!countries.length) return null;

  const getCountryName = (code: string) => {
    const country = countries.filter((element) => {
      return element.alpha3Code === code;
    });
    const countryName = country[0].name;
    return countryName;
  };

  return (
    <>
      Border Countries:
      {borders.map((border) => {
        const countryName = getCountryName(border);
        return (
          <Link
            key={countryName}
            className='country__cta'
            to={`/${countryName}`}
          >
            {countryName}
          </Link>
        );
      })}
    </>
  );
};
