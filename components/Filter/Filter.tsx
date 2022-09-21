import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import classNames from "classnames";

import "./Filter.scss";

export type FilterProps = {
  onChange: (filter: FilterOptions) => void;
  filter: FilterOptions;
};

type FilterOptionProps = {
  label: string;
  onClickOption: () => void;
};

export enum FilterOptions {
  All = "Filter By Region",
  Asia = "Asia",
  Africa = "Africa",
  Europe = "Europe",
  America = "Americas",
  Oceania = "Oceania",
}

const FilterOption: FunctionComponent<FilterOptionProps> = ({
  label,
  onClickOption,
}) => {
  return (
    <div className='option' onClick={onClickOption}>
      {label}
    </div>
  );
};

export const Filter: FunctionComponent<FilterProps> = ({
  onChange,
  filter,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const selectClassNames = classNames({
    "selected-container": true,
    "selected-container--active": active,
    "selected-container--inactive": !active,
  });

  return (
    <div className='countries__filter' onClick={() => setActive(!active)}>
      <div className={selectClassNames}>
        <div className='selected-option'>
          {filter === FilterOptions.America ? "America" : filter}
        </div>
        <div className='selected-icon'>
          {active ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      {active && (
        <div className='filter__options'>
          {Object.values(FilterOptions).map((option) => (
            <FilterOption
              key={option}
              label={option === FilterOptions.America ? "America" : option}
              onClickOption={() => onChange(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
