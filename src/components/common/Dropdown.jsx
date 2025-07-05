import { useRef, useState } from "react";
import DownArrowIcon from "../../assets/down-arrow.svg?react";
import useClickOutside from "../hooks/useClickOutside";

const Dropdown = ({
  label,
  icon,
  options = [],
  selected,
  onSelect,
  openUpward = false,
  style = {},
}) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isPlaceholder = !selected;

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div
      ref={dropdownRef}
      style={{
        width: "100%",
        minWidth: "60px",
        maxWidth: "160px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        fontFamily: "Inter, sans-serif",
        ...style,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "4px",
          backgroundColor: "#fff",
          border: "1px solid #CED4DA",
          fontSize: "14px",
          cursor: "pointer",
          color: isPlaceholder ? "#999" : "#000",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {icon} {selected || label}
        </span>
        <span style={{ marginLeft: "8px" }}>
          <DownArrowIcon />
        </span>
      </button>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: openUpward ? "auto" : "100%",
            bottom: openUpward ? "100%" : "auto",
            right: "100%",
            left: 0,
            width: "100%",
            marginTop: "4px",
            padding: 0,
            listStyleType: "none",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
          }}
        >
          <li
            style={{
              padding: "10px 12px",
              fontSize: "14px",
              color: "#999",
              cursor: "not-allowed",
              backgroundColor: "#f9f9f9",
            }}
          >
            {icon} {label}
          </li>

          {options.map((option, index) => (
            <li
              key={option}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                backgroundColor:
                  hoveredIndex === index ? "#f2f2f2" : "transparent",
                transition: "background-color 0.2s ease",
                fontSize: "14px",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
