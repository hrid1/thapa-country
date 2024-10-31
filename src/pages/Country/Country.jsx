import { useState, useTransition } from "react";
import { useEffect } from "react";
import { getCountryData } from "../../api/postApi";
import Spiner from "../../components/Spiner";
import CountryCard from "../../components/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res);
      setCountries(res.data);
    });
  }, []);

  // // 2nd rule

  console.log(countries);
  if (isPending) return <Spiner></Spiner>;
  return (
    <div>
      <h2 className="text-center text-2xl my-2 font-semibold">
        This is country page
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
        {countries.map((country, index) => (
          <CountryCard index={index} country={country}></CountryCard>
        ))}
      </section>
    </div>
  );
};

export default Country;
