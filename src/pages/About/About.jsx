import countryFacts from "../../../public/api/countryFacts.json";

const About = () => {
  return (
    <div>
      <h3 className="text-center text-4xl font-bold my-4 md:my-8">
        Here are the Intersting Facts <br />
        we&apos;re Proud of
      </h3>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-2 md:mx-8 mb-8">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div
              key={id}
              className="border border-green-900 rounded-xl md:rounded-2xl p-4 md:p-6 space-y-2 bg-gradient-to-r from-green-950 via-[#081C15] to-[#032317]"
            >
              <h4 className="text-2xl font-semibold">{countryName}</h4>
              <p>
                <span className="text-gray-400">Capital: </span>
                {capital}
              </p>
              <p>
                <span className="text-gray-400">Population: </span> {population}
              </p>
              <p>
                <span className="text-gray-400">InterstingFact: </span>
                {interestingFact}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default About;
