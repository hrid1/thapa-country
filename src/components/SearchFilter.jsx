const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  //   handle search value
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  // handle filter option
  const handleSelectOption = (e) => {
    setFilter(e.target.value)
  };
 
  return (
    <section className="flex gap-6 my-4">
      <div >
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <select value={filter} onChange={handleSelectOption}>
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
