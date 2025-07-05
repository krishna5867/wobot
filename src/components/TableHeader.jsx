import Logo from "../assets/logo.svg";
import { LocationData, StatusData } from "../utils";
import Dropdown from "./common/Dropdown";
import SearchBar from "./common/Searchbar";

const TableHeader = ({ filters, updateFilter }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={Logo}
          alt="wobot-logo"
          style={{
            width: "150px",
            height: "auto",
          }}
        />
      </div>

      {/* SearchBar and Title */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontStyle: "medium",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Cameras
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Manage your cameras here.
          </p>
        </div>
        <div>
          <SearchBar onSearch={(val) => updateFilter("search", val)} />
        </div>
      </div>
      {/* DropDown Filter */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Dropdown
          label="Location"
          options={LocationData}
          selected={filters.location}
          onSelect={(val) => updateFilter("location", val)}
          className="dropdown"
        />
        <Dropdown
          label="Status"
          options={StatusData}
          selected={filters.status}
          onSelect={(val) => updateFilter("status", val)}
        />
      </div>
    </>
  );
};

export default TableHeader;
