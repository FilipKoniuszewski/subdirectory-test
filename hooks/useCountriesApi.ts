import { useState, useEffect, useCallback } from "react";
import { CountryDataType } from "../types/types";

type CountriesApiResult = {
  countries: CountryDataType[];
  loading: boolean;
};

const useCountriesApi = (url: string): CountriesApiResult => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const getdata = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getdata();
  }, [url, getdata]);

  return { loading, countries };
};

export default useCountriesApi;
