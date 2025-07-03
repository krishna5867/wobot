import React from "react";
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import Pagination from "./Pagination";

const CameraList = () => {
  return (
    <div>
      <TableHeader />
      <TableList />
      <Pagination />
    </div>
  );
};

export default CameraList;
