import React from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
  return (
    <tr>
      <TableCell color={props.color} handleCellClick={props.handleCellClick} />
    </tr>
  );
};

export default TableRow;
