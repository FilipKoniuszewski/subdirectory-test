import { FunctionComponent } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import useCountriesApi from "../../hooks/useCountriesApi";
import { BorderCountries } from "../BorderCountries/BorderCoutries";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { Text } from "../Text/Text";

import "./Country.scss";

export const Country: FunctionComponent = () => {
  const params = useParams();

  console.log(params);

  const { countries, loading } = useCountriesApi(
    `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
  );

  if (!countries.length) return null;

  const countryData: any = countries[0];

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    borders,
    currencies,
    languages,
  } = countryData;

  const capitalName = capital[0];

  const nativeNames: any = Object.values(name.nativeName)[0];

  const commonName = name?.common;

  const populationNumber = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const Currencies: string = Object.values(currencies)
    ?.map((currency: any) => {
      return currency.name;
    })
    .join(", ");

  const Languages: string = Object.values(languages)
    ?.map((language: any) => {
      return language;
    })
    .join(", ");

  const Borders: string[] = borders?.map((border: string) => {
    return border;
  });

  return (
    <>
      {loading && <LoadingIndicator />}
      <div className='back-cta-container'>
        <Link to='/' className='back-cta'>
          <FaAngleLeft />
          Back
        </Link>
      </div>
      <div className='country__container'>
        <div className='country__image-wrapper'>
          <img src={flags?.png} alt='flag' className='flag' />
        </div>
        <div className='country__info-wrapper'>
          <div className='country__title-section'>
            <h1>{commonName}</h1>
          </div>
          <div className='country__details-section'>
            <div className='country__details-section-first'>
              <Text label='Native Name' name={nativeNames.common} />
              <Text label='Population' name={populationNumber} />
              <Text label='Region' name={region} />
              <Text label='Sub Region' name={subregion} />
              <Text label='Capital' name={capitalName} />
            </div>
            <div className='country__details-section-second'>
              <Text label='Languages' name={Languages} />
              <Text label='Currencies' name={Currencies} />
            </div>
          </div>
          <div className='country__border-countries-section'>
            {Borders && <BorderCountries borders={Borders} />}
          </div>
        </div>
      </div>
    </>
  );
};
