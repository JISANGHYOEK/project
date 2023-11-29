import React from "react";
import "./FreeRe.css";

function FreeReTable(props) {
  const { headersName, children } = props;

  return (
    <table className="FreeRe-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className="FreeRe-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default FreeReTable;
