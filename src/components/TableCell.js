import React from "react";

const TableCell = (props) => {
  return (
    <td
      style={{ border: "1px solid black", backgroundColor: props.color }}
      onClick={props.handleCellClick}
    >
      1
    </td>
  );
};

export default TableCell;
