import React from "react";

const TableCell = (props) => {
  let className = `text-center table-${props.color}`;

  return (
    <td className={className} onClick={props.handleCellClick}>
      0
    </td>
  );
};

export default TableCell;
