import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="searchbar">
      <input
        type="search"
        placeholder="qidiring..."
        className="form-control form__input w-50 mx-auto mt-5"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
