import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import SearchIcon from "../../assets/down-arrow.svg?react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedQuery = useDebounce(inputValue, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "6px 12px",
        borderRadius: "6px",
        backgroundColor: "#F3F3F4",
        border: "1px solid #eee",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "16px",
          backgroundColor: "transparent",
          color: "#333",
        }}
      />
      <span style={{ fontSize: "18px", color: "#444", marginLeft: "10px" }}>
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
