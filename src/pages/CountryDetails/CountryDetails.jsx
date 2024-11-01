import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIndvCountryData } from "../../api/postApi";
import Spiner from "../../components/Spiner";
import SearchFilter from "../../components/SearchFilter";

const CountryDetails = () => {
  const { id: cName } = useParams();
  const navigate = useNavigate();

  //   loaded the data
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  // search and filter
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndvCountryData(cName);
      // console.log(res);
      if (res.status === 200) {
        setCountry(res.data);
      }
    });
  }, [cName]);

  console.log(country);

  //   for loading data
  if (isPending || !country) return <Spiner></Spiner>;

  console.log(search, filter);

  const {
    flags,
    name,
    currencies,
    capital,
    region,
    subregion,
    languages,
    border,
    population,
    tld,
  } = country[0];

  console.log(Object.keys(languages));
  return (
    <div className="my-10 mx-4 md:mx-12">
      {/* search option */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filte={filter}
        setFilter={setFilter}
      />

      {/* country info */}
      <section className="flex flex-col md:flex-row justify-between gap-6 ">
        <div className="md:w-1/2 flex items-center justify-center">
          <img className="w -4/5" src={flags.png} alt="" />
        </div>

        {/* country info */}
        <div className="md:w-1/2 space-y-2 md:space-y-3">
          <h2 className="text-4xl font-semibold">{name.official}</h2>
          <p
            className="text-gray-400
          "
          >
            Native Names : <span className="text-white">1200</span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Population:{" "}
            <span className="text-white">{population.toLocaleString()}</span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Region: <span className="text-white">{region}</span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Sub-region:{" "}
            <span className="text-white">{subregion || "Not availble"}</span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Capital: <span className="text-white">{capital}</span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Top Level Domain: <span className="text-white"> {tld[0]}</span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Curencies:{" "}
            <span className="text-white">
              {Object.keys(currencies)
                .map((curElem) => currencies[curElem].name)
                .join(",")}
            </span>
          </p>
          <p
            className="text-gray-400
          "
          >
            Languages:
            <span className="text-white">
              {Object.keys(languages).map(
                (item, idx) =>
                  // <span key={idx}> {item} </span>
                  item
              )}
            </span>
          </p>
        </div>
      </section>

      <section className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="border px-3.5 py-2.5 rounded-xl "
        >
          Go Back
        </button>
      </section>
    </div>
  );
};

export default CountryDetails;
