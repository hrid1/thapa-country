import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get("/all?fields=name,population,capital,region,capital,flags");
};

// individual country

export const getIndvCountryData = (country) => {
  return api.get(
    `name/${country}?fullText=true&fields=name,population,region,subregion,tld,capital,flags,currencies,languages,borders,flags`
  );
};
