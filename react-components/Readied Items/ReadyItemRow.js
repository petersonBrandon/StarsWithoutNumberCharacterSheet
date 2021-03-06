import React from "react";

const ReadyItemRow = (props) => {
  return (
    <div className={props.lastRow ? "ready_items_row" : "ready_item_mid_row ready_items_row"}>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          {...props.register(`${props.indexName}_col1`)}
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          {...props.register(`${props.indexName}_col2`)}
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          {...props.register(`${props.indexName}_col3`)}
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          {...props.register(`${props.indexName}_col4`)}
        />
      </div>
      <div className="ready_item ready_item_mid_col">
        <input
          className="character_input"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          {...props.register(`${props.indexName}_col5`)}
        />
      </div>
      <div className={props.lastRow ? "cut_corner_bottomRight ready_item" : "ready_item"}>
        <input
          className="character_input"
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          {...props.register(`${props.indexName}_col6`)}
        />
      </div>
    </div>
  );
};

export default ReadyItemRow;
