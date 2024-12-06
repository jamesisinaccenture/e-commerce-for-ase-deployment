import React from "react";

import { useGeneralStore } from "@/hooks/state/store/useGeneralStore";

const Search = () => {
  const { query, setQuery } = useGeneralStore(); // Access global state

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase()); // Update global search query
  };

  return (
    <div className="w-full md:w-96">

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search categories or products..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
