import Head from "next/head";
import { motion } from "framer-motion";
import CharacterTrait from "../react-components/CharacterTrait";
import WeaponItem from "../react-components/WeaponItem";
import ArmorItem from "../react-components/ArmorItem";
import CapabilitiesTable from "../react-components/Capabilities/CapabilitiesTable";
import FociItem from "../react-components/FociItem";
import MoneyItem from "../react-components/MoneyItem";
import ReadyItemRow from "../react-components/Readied Items/ReadyItemRow";
import HexBoxTopRight from "../react-components/HexBoxTopRight";
import SaveHexItem from "../react-components/Saves/SaveHexItem";
import AttributeRightOffset from "../react-components/Attributes/AttributeRightOffset";
import AttributeLeftOffset from "../react-components/Attributes/AttributeLeftOffset";
import StandardBox from "../react-components/StandardBox";
import NavMenu from "../react-components/NavMenu";
import { useRouter } from "next/router";

const CharacterSheet = () => {
  const router = useRouter();

  const sheetPage = {
    hidden: { scaleY: 0 },
    show: {
      scaleY: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };

  const sheetColumn = {
    hidden: { scaleY: 0 },
    show: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
        className="darken_background"
      />
      <Head>
        <title>Stars Without Number</title>
        <meta name="description" content="Stars Without Number" />
        <link rel="icon" href="/SWNLogoStaticAlt.ico" />
      </Head>

      <main className="main_container">
        <NavMenu />
        <motion.div
          className="character_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ default: { duration: 0.5 } }}
        >
          <motion.section
            className="page"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={sheetPage}
          >
            <motion.div
              id="page1_col1"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_traits" className="full_width">
                <CharacterTrait title="Name" />
                <CharacterTrait title="Background" />
                <CharacterTrait title="Class" />
                <div className="character_box horizontal_flex">
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">Level</div>
                    <div className="hex">
                      <input className="hex_input" type="text" />
                    </div>
                  </div>
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">XP</div>
                    <div className="hex">
                      <input className="hex_input" type="text" />
                    </div>
                  </div>
                </div>
                <CharacterTrait title="Homeworld" />
                <CharacterTrait title="Employer" />
                <CharacterTrait title="Species" />
              </div>
              <div id="character_weapons" className="full_width">
                <div className="character_box">
                  <div className="box_header">
                    <div className="cut_corner2 box_header_full horizontal_flex">
                      <p id="weapons_header_left">Weapons</p>
                      <div
                        id="weapons_header_right"
                        className="horizontal_flex"
                      >
                        <p>Range/Ammo</p>
                        <p>Total Atk Bonus</p>
                      </div>
                    </div>
                  </div>
                </div>
                <WeaponItem />
                <WeaponItem />
                <WeaponItem />
                <WeaponItem />
                <WeaponItem />
              </div>
              <div id="character_armor" className="full_width">
                <div className="character_box">
                  <div className="box_header">
                    <div className="cut_corner2 box_header_full horizontal_flex">
                      <p id="weapons_header_left">Armor</p>
                    </div>
                  </div>
                </div>
                <ArmorItem />
                <ArmorItem />
                <ArmorItem />
              </div>
            </motion.div>
            <motion.div
              id="page1_col2"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_capabilities" className="full_width">
                <CapabilitiesTable />
                <div className="character_box horizontal_flex">
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">
                      Basic Atk Bonus
                    </div>
                    <div className="hex">
                      <input className="hex_input" type="text" />
                    </div>
                  </div>
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">
                      Skill Points
                    </div>
                    <div className="hex">
                      <input className="hex_input" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="character_foci" className="full_width">
                <div className="character_box">
                  <div className="box_header">
                    <div className="cut_corner2 box_header_full horizontal_flex">
                      <p id="weapons_header_left">Foci</p>
                    </div>
                  </div>
                </div>
                <FociItem />
                <FociItem />
                <FociItem />
                <FociItem />
                <FociItem />
                <FociItem />
              </div>
              <div id="character_items" className="full_width">
                <div className="character_box">
                  <div className="box_header">
                    <div className="cut_corner_topLeft box_header_full horizontal_flex">
                      <p id="weapons_header_left">Readied Items</p>
                    </div>
                  </div>
                  <ReadyItemRow lastRow={false} />
                  <ReadyItemRow lastRow={true} />
                </div>
                <div id="money_section">
                  <MoneyItem title="Credits" />
                  <MoneyItem title="Debts" />
                </div>
              </div>
            </motion.div>
            <motion.div
              id="page1_col3"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_attributes" className="full_width">
                <div className="full_width">
                  <HexBoxTopRight
                    title="Hitpoints/Conditions"
                    hexLabel="Max:"
                    rows={5}
                  />
                  <HexBoxTopRight
                    title="System Strain"
                    hexLabel="Permanent:"
                    rows={3}
                  />
                  <div className="character_box">
                    <div className="box_header">
                      <div className="cut_corner_topLeft box_header_full">
                        <p>Saves</p>
                      </div>
                    </div>
                    <div
                      id="saves_data_container"
                      className="cut_corner_bottomRight"
                    >
                      <SaveHexItem title="Pysical" />
                      <SaveHexItem title="Evasion" />
                      <SaveHexItem title="Mental" />
                    </div>
                  </div>
                </div>
                <div className="full_width">
                  <div className="character_box">
                    <div className="box_header">
                      <div className="cut_corner_topLeft box_header_full">
                        <p>Attributes</p>
                      </div>
                    </div>
                    <div id="attributes_container">
                      <AttributeRightOffset title="STR" />
                      <AttributeLeftOffset title="DEX" />
                      <AttributeRightOffset title="CON" />
                      <AttributeLeftOffset title="INT" />
                      <AttributeRightOffset title="WIS" />
                      <AttributeLeftOffset title="CHA" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="character_cybernetics" className="full_width">
                <StandardBox
                  title="Cybernetics/Innate Abilites"
                  rows={4}
                  columns={1}
                />
              </div>
              <div id="character_psionic" className="full_width">
                <StandardBox title="Psionic Techniques" rows={8} columns={1} />
                <HexBoxTopRight
                  title="Psionic Effort"
                  hexLabel="Max:"
                  rows={3}
                />
              </div>
            </motion.div>
          </motion.section>
          <motion.section
            className="page"
            initial="hidden"
            animate="show"
            variants={sheetPage}
          >
            <motion.div
              id="page2_col1"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_equipment">
                <StandardBox
                  title="Stowed Equipment (Backpack)"
                  rows={12}
                  columns={1}
                />
                <StandardBox
                  title="Non-Encumbering Equipment"
                  rows={5}
                  columns={1}
                />
                <StandardBox
                  title="Equipment in Storage"
                  rows={6}
                  columns={1}
                />
                <StandardBox
                  title="Assets/Owned Property"
                  rows={6}
                  columns={1}
                />
              </div>
            </motion.div>
            <motion.div
              id="page2_col2"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_other1">
                <StandardBox title="Notes to Remember" rows={9} columns={1} />
                <StandardBox
                  title="Vehicle, Robot, and Drone Details"
                  rows={9}
                  columns={1}
                />
                <StandardBox title="Starship Details" rows={12} columns={1} />
              </div>
            </motion.div>
            <motion.div
              id="page2_col3"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_other2">
                <StandardBox
                  title="Noteworth Achievements"
                  rows={9}
                  columns={1}
                />
                <StandardBox title="Aliases/ID's" rows={6} columns={1} />
                <StandardBox title="Contacts and Allies" rows={6} columns={1} />
                <StandardBox title="Languages Known" rows={3} columns={1} />
                <StandardBox title="Current Goals" rows={3} columns={1} />
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
};

export default CharacterSheet;
