import React from "react";

const SaveHexItem = (props) => {
  return (
    <div className="save_item">
      <p>{props.title}</p>
      <div className="hex_margin hex_colored">
        <input
          className="hex_input_colored"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
};

export default SaveHexItem;
