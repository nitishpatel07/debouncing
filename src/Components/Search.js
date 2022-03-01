import React from "react";
import CountryList from "./CountryList";

function Search() {
  const [search, setSearch] = React.useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const optimizedFn = React.useCallback(debounce(handleInput), []);
  return (
    <div>
      <input
        data-testid="filterInput"
        className="large"
        placeholder="Enter Country Name"
        onChange={optimizedFn}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <CountryList name={search} />
    </div>
  );
}

export default Search;
