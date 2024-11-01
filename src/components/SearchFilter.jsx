const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  //   handle search value
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  // handle filter option
  const handleSelectOption = (e) => {
    setFilter(e.target.value);
  };

  //   hand sorting
  const handleSorting = (value) => {
    const sortCountries = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });

    setCountries(sortCountries);
  };
  return (
    <section className="flex flex-wrap justify-between gap-6 my-4 md:mx-8 mx-auto items-center">
      <div>
        <input
          type="text"
          placeholder="search"
          className="p-2 rounded-lg bg-transparent border border-green-950"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button
          onClick={() => {
            handleSorting("asc");
          }}
          className="p-2 border border-green-950 rounded-md px-3"
        >
          ASC
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleSorting("dsc");
          }}
          className="p-2 border border-green-950 rounded-md px-3"
        >
          DSC
        </button>
      </div>

      <div>
        <select
          className="p-2 rounded-lg  bg-transparent border border-green-950"
          value={filter}
          onChange={handleSelectOption}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
