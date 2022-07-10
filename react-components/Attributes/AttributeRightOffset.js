import React from "react";

const AttributeRightOffset = (props) => {
  return (
    <div className="attribute_row_right">
      <div className="attribute_hex_item">
        <div className="cut_corner_topLeft hex_label_small">{props.title}</div>
        <div className="hex_colored">
          <input
            className="hex_input_colored"
            type="text"
            {...props.register(`atr_${props.title}_base`)}
          />
        </div>
        <div className="cut_corner_bottomRight hex_label_small">
          <input
            className="character_input_colored"
            type="text"
            spellCheck="false"
            autoComplete="off"
            autoCorrect="off"
            {...props.register(`atr_${props.title}_modifier`)}
          />
        </div>
      </div>
    </div>
  );
};

export default AttributeRightOffset;
