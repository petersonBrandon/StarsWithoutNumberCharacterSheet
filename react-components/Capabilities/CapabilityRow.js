import React from "react";

const CapabilityRow = (props) => {
  return (
    <div
      className={
        props.bottomRight
          ? "capability_row"
          : "capability_row_border capability_row"
      }
    >
      <div
        className={
          props.topLeft
            ? `cut_corner_topLeft capability_left`
            : `capability_left`
        }
      >
        {props.col1}
      </div>
      <div className="capability_right">
        <input
          className="character_input capability_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div className="capability_left">{props.col2}</div>
      <div className="capability_right">
        <input
          className="character_input capability_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div
        className={
          props.col3 == "-"
            ? "transparent_text capability_left"
            : "capability_left"
        }
      >
        {props.col3}
      </div>
      <div
        className={
          props.bottomRight
            ? `cut_corner_bottomRight capability_right`
            : `capability_right`
        }
      >
        <input
          className="character_input capability_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
    </div>
  );
};

export default CapabilityRow;
