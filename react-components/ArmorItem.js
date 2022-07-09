import React from "react";

const ArmorItem = () => {
  return (
    <div className="character_box">
      <div className="armor_item">
        <div className="top_row weapon_row">
          <div className="cut_corner_topLeft weapon_item_left">Name</div>
          <div className="armor_item_mid">
            <input
              className="character_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
          <div className="weapon_item_right">
            <div className="hex_offset hex_colored">
              <p className="hex_top_label">AC</p>
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
        <div className="bottom_row weapon_row">
          <div className="bottom_row_left weapon_item_left top_border_thick">
            Mods
          </div>
          <div className="armor_item_mid top_border_thick">
            <input
              className="character_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
          <div className="weapon_item_right_bottom">Spacer</div>
        </div>
      </div>
    </div>
  );
};

export default ArmorItem;
