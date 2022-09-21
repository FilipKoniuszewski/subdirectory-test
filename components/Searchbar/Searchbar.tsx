import React, { FunctionComponent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./Searchbar.scss";

export type SearchBarProps = {
  onChange: (input: string) => void;
};
export const Searchbar: FunctionComponent<SearchBarProps> = ({ onChange }) => {
  return (
    <div className='countries__searchbar'>
      <input
        type='text'
        placeholder='Search for a country'
        onChange={(event) => onChange(event.target.value)}
      />
      <div className='searchbar__icon'>
        <AiOutlineSearch size={25} />
      </div>
    </div>
  );
};
