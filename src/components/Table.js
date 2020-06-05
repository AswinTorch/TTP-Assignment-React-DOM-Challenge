import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <table className="table">
      <tbody>
        <TableRow handleCellClick={props.handleCellClick} />
      </tbody>
    </table>
  );
};

export default Table;
