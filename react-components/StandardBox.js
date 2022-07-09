import React from "react";

const StandardBox = (props) => {
  const rows = [];
  let index = 0;

  const runCallback = (cb) => {
    return cb();
  };

  for (let i = 0; i < props.rows; i++) {
    index = i;
    rows.push(
      <div className="armor_item">
        <div className="top_row weapon_row">
          <div
            className={
              i == props.rows - 1
                ? "cut_corner_bottomRight armor_item_mid numbered_row"
                : "armor_item_mid numbered_row"
            }
          >
            <p>{i + 1}</p>
            <input
              className="character_input standard_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
            {runCallback(() => {
              const cols = [];
              for (let i = 0; i < props.columns; i++) {
                cols.push(
                  <>
                    <p>{index + 1}</p>
                    <input
                      className="character_input foci_input"
                      type="text"
                      spellCheck="false"
                      autoComplete="off"
                      autoCorrect="off"
                    />
                  </>
                );
              }
              return cols;
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="character_box">
      <div className="box_header">
        <div className="cut_corner_topLeft box_header_full horizontal_flex">
          <p>{props.title}</p>
        </div>
      </div>
      {rows}
    </div>
  );
};

export default StandardBox;
