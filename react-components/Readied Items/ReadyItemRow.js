import React from "react";

const ReadyItemRow = (props) => {
  return (
    <div className={props.lastRow ? "ready_items_row" : "ready_item_mid_row ready_items_row"}>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div className={props.lastRow ? "cut_corner_bottomRight ready_item" : "ready_item"}>
        <input
          className="character_input"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
    </div>
  );
};

export default ReadyItemRow;
