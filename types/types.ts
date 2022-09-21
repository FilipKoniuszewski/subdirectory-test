export type CountryFields = {
  name: string;
  flag: string;
  nativeName: string;
  population: string;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borderCountries: [];
};

export type CountryCardFields = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type CountryDataType = CountryCardFields & {
  flags: string[];
  topLevelDomain: string[];
  alpa2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  altSpellings: string[];
  continent: string;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  translations: translation;
  regionalBlocs: regionalBloc[];
  independent: boolean;
  cioc: string;
  subregion: string;
  currencies: any;
  languages: any;
};

type translation = {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
};

type regionalBloc = {
  acronym: string;
  name: string;
  otherAcronyms?: string[];
  otherNames?: string[];
};
