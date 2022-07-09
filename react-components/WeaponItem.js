import { BiTargetLock } from 'react-icons/bi'
import { GiHeavyBullets } from 'react-icons/gi'

const WeaponItem = () => {
  return (
    <div className="character_box">
      <div className="weapon_item">
        <div className="top_row weapon_row">
          <div className="cut_corner_topLeft weapon_item_left">Name</div>
          <div className="weapon_item_mid_left">
            <input
              className="character_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
          <div className="weapon_icon_container">
            <BiTargetLock className="weapon_icon" />
          </div>
          <div className="weapon_item_mid_right">
            <input
              className="character_input covered_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
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
          <div className="cut_corner_bottomRight weapon_item_far_right">
            <div className="weapon_attack_bonus">
              <input
                className="character_input"
                type="text"
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
          </div>
        </div>
        <div className="bottom_row weapon_row">
          <div className="bottom_row_left weapon_item_left top_border_thick">Mods</div>
          <div className="weapon_item_mid_left top_border_thick">
            <input
              className="character_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
          <div className="weapon_icon_container top_border_thick">
            <GiHeavyBullets className="weapon_icon" />
          </div>
          <div className="weapon_item_mid_right top_border_thick">
            <input
              className="character_input covered_input"
              type="text"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
          <div className="weapon_item_right_bottom">Spacer</div>
          <div className="weapon_item_far_right_bottom">Spacer</div>
        </div>
      </div>
    </div>
  );
};

export default WeaponItem;
