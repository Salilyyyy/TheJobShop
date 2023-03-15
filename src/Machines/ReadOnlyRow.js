import React from "react";

const ReadOnlyRow = ({ infor, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{infor.id}</td>
      <td>{infor.name}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, infor)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(infor.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
