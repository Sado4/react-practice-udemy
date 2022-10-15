const AnimalFilter = ({ filterState }) => {
  const [filterVal, setFilterVal] = filterState;
  <input
    type="text"
    value={filterVal}
    onChange={(e) => setFilterVal(e.target.value)}
  />;
};

export default AnimalFilter;
