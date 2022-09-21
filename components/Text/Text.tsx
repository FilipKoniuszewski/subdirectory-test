import React, { FunctionComponent } from "react";

import "./Text.scss";

export type TextProps = {
  label: string;
  name: string;
};
export const Text: FunctionComponent<TextProps> = ({ label, name }) => {
  return (
    <div className='text__container'>
      <div className='text__label'>{label}:</div>
      <div className='text__name'>{name}</div>
    </div>
  );
};
