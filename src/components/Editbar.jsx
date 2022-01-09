import React from "react";

const Editbar = (props) => {
  return (
    <form className="editForm">
      <input type="text" placeholder="Edit your chat" required autoFocus />
      <button type="submit">POST</button>
    </form>
  );
};

export default Editbar;
