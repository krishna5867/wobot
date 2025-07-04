import React from "react";
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import Pagination from "./Pagination";

const CameraList = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "1260px",
        margin: "0 auto",
      }}
    >
      <TableHeader />
      <TableList />
      <Pagination />
    </div>
  );
};

export default CameraList;
