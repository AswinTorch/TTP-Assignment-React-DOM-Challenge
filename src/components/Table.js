import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  let rows = [];
  for (let a = 0; a < props.numberOfRows; a++) {
    rows.push(
      <TableRow
        key={a.toString()}
        handleCellClick={props.handleCellClick}
        numberOfColumns={props.numberOfColumns}
        color={props.color}
      />
    );
  }

  return (
    <table className="table table-bordered">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
