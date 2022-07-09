import React from "react";

const HexBoxTopRight = (props) => {
  const rows = [];
  for (let i = 0; i < props.rows; i++) {
    rows.push(
      <div className="armor_item">
        <div className="top_row weapon_row">
          <div
            className={
              i == props.rows - 1
                ? "cut_corner_bottomRight hexBox_row"
                : "hexBox_row"
            }
          >
            <p>{i + 1}</p>
            <input
              className="character_input foci_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="character_box">
      <div className="box_header">
        <div className="cut_corner_topLeft box_header_full horizontal_flex_between">
          <p className="hex_box_header_item">{props.title}</p>
          <p className="hex_box_header_item">{props.hexLabel}</p>
        </div>
        <div className="weapon_item_right">
          <div className="hex_offset hex_colored">
            <input
              className="hex_input_colored"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
        </div>
      </div>
      {rows}
    </div>
  );
};

export default HexBoxTopRight;
