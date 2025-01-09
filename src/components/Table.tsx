import React from "react";
import "../styles/table.scss";

const Table: React.FC = () => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Example Item</td>
          <td>Active</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
