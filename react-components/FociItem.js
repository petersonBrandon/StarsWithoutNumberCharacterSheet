import React from "react";

const FociItem = () => {
  return (
    <div className="character_box">
      <div className="armor_item">
        <div className="top_row weapon_row">
          <div className="cut_corner_topLeft armor_item_mid">
            <input
              className="character_input foci_input"
              type="text"
              spellcheck="false"
              autocomplete="off"
              autocorrect="off"
            />
          </div>
          <div className="weapon_item_right">
            <div className="hex_offset hex_colored">
              <p className="hex_top_label">Lvl</p>
              <input
                className="hex_input_colored"
                type="text"
                spellcheck="false"
                autocomplete="off"
                autocorrect="off"
              />
            </div>
          </div>
        </div>
        <div className="bottom_row weapon_row">
          <div className="armor_item_mid top_border_thick">
            <input
              className="character_input foci_input"
              type="text"
              spellcheck="false"
              autocomplete="off"
              autocorrect="off"
            />
          </div>
          <div className="weapon_item_right_bottom">Spacer</div>
        </div>
      </div>
    </div>
  );
};

export default FociItem;