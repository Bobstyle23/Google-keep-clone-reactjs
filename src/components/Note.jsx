import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>
        {`Date:  `}
        {props.currentYear}
      </p>

      <button style={{ background: "none" }} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
