import React from "react";

const TableCell = (props) => {
  return (
    <td
      className="text-center"
      onClick={props.handleCellClick}
      style={{ backgroundColor: "white" }}
    >
      0
    </td>
  );
};

export default TableCell;
