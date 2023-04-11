import "./SearchBox.css";

function SearchBox({ searchfield, searchChange }) {
  return (
    <div className="search">
      <input
        className="input"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
