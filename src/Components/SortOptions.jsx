import React from "react";

const SortOptions = ({ onSortChange }) => {
  return (
    <div className="mb-6 flex justify-end">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="border px-2 py-2 rounded-md"
      >
        <option value="">🔀 Sort by</option>
        <option value="price-asc">💸 Price: Low to High</option>
        <option value="price-desc">💰 Price: High to Low</option>
        <option value="popularity">🔥 Popularity</option>
        <option value="name">🔤 Name</option>
      </select>
    </div>
  );
};

export default SortOptions;
