import { useState, useTransition } from "react";
import { useEffect } from "react";
import { getCountryData } from "../../api/postApi";
import Spiner from "../../components/Spiner";

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

  if (isPending) return <Spiner></Spiner>
  return (
    <div>
      <h2>This is country page</h2>
    </div>
  );
};

export default Country;
