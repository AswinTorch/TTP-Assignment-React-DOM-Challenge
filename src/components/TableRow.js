import React from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
  let columns = [];
  for (let a = 0; a < props.numberOfColumns; a++) {
    columns.push(
      <TableCell
        key={a.toString()}
        color={props.color}
        handleCellClick={props.handleCellClick}
      />
    );
  }

  return <tr>{columns}</tr>;
};

export default TableRow;
