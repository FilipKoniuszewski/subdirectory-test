import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { CountryCardFields } from "../../types/types";
import { Text } from "../Text/Text";

import "./CountryCard.scss";

export const CountryCard: FunctionComponent<CountryCardFields> = ({
  name,
  flag,
  population,
  region,
  capital,
}) => {
  const populationNumber = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Link to={`${name}`} className='country-card__container'>
      <div className='img__container'>
        <img src={flag} alt='flag' className='country-card__img' />
      </div>
      <div className='country-card__title'>{name}</div>
      <div className='country-card__content'>
        <Text label='Population' name={populationNumber} />
        <Text label='Region' name={region} />
        <Text label='Capital' name={capital} />
      </div>
    </Link>
  );
};
