import React from "react";

export default function SearchBar({ onSearch, onCheck }) {
  return (
    <div>
      <label>
        Search
        <input type="text" onChange={onSearch} />
        <label>
          <input type="checkbox" onChange={onCheck} />
          Only show products in stock
        </label>
      </label>
    </div>
  );
}
