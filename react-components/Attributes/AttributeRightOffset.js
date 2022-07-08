import React from "react";

const AttributeRightOffset = (props) => {
  return (
    <div className="attribute_row_right">
      <div className="attribute_hex_item">
        <div className="cut_corner_topLeft hex_label_small">{props.title}</div>
        <div className="hex_colored">
          <input className="hex_input_colored" type="text" />
        </div>
        <div className="cut_corner_bottomRight hex_label_small">
          <input
            className="character_input_colored"
            type="text"
            spellcheck="false"
            autocomplete="off"
            autocorrect="off"
          />
        </div>
      </div>
    </div>
  );
};

export default AttributeRightOffset;
