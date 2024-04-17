"use client";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="mb-9">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 text-black rounded-md focus:outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default SearchBar;
