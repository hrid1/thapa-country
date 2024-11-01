import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const {
    flags,
    name: { common },
    population,
    region,
    capital,
  } = country;
  
  return (
    <div className="p-8 max-w-lg border border-green-800 rounded-2xl hover:shadow-xl hover:shadow-green-900 flex flex-col ">
      <img
        src={flags.svg}
        alt={flags.alt}
        className="shadow rounded-lg overflow-hidden  w-60 h-40 mx-auto"
      />
      <div className="mt-8">
        <h4 className="font-bold text-xl">
          {common.length > 10 ? common.slice(0, 10) + "..." : common}
        </h4>
        <p className="mt-2 text-gray-400">
          Region: <span className="text-gray-200">{region}</span>
        </p>
        <p className="mt-2 text-gray-400">
          Region: <span className="text-gray-200">{population}</span>
        </p>
        <p className="mt-2 text-gray-400">
          Capital: <span className="text-gray-200">{capital}</span>
        </p>
        <div className="mt-3">
          <Link to={`${common}`}>
            <button
              type="button"
              className="rounded-md border border-gray-600 bg-gray-800 px-3.5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900 inline-flex gap-4 items-center justify-center"
            >
              Read more
              <FaArrowRightLong></FaArrowRightLong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
