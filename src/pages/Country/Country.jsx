import { useState, useTransition } from "react";
import { useEffect } from "react";
import { getCountryData } from "../../api/postApi";
import Spiner from "../../components/Spiner";
import CountryCard from "../../components/CountryCard";
import SearchFilter from "../../components/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  // search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Spiner></Spiner>;
  console.log(search, filter);
  //----------------- search country
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  // ----------------filter country
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  // here is the main logic for search and filter
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl my-2 font-semibold">
        This is country page
      </h2>

      <section>
        {/* search option */}

        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6">
        {filterCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </section>
    </div>
  );
};

export default Country;
