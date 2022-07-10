import Head from "next/head";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
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

const CharacterSheet = () => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const saveData = async (data) => {
    console.log(data);
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
        <motion.form
          className="character_container"
          onSubmit={handleSubmit(saveData)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ default: { duration: 0.5 } }}
        >
          <button className="login_item logInbtn" type="submit">
            SAVE
          </button>
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
                <CharacterTrait title="Name" register={register} />
                <CharacterTrait title="Background" register={register} />
                <CharacterTrait title="Class" register={register} />
                <div className="character_box horizontal_flex">
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">Level</div>
                    <div className="hex">
                      <input
                        className="hex_input"
                        type="text"
                        {...register("level")}
                      />
                    </div>
                  </div>
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">XP</div>
                    <div className="hex">
                      <input
                        className="hex_input"
                        type="text"
                        {...register("xp")}
                      />
                    </div>
                  </div>
                </div>
                <CharacterTrait title="Homeworld" register={register} />
                <CharacterTrait title="Employer" register={register} />
                <CharacterTrait title="Species" register={register} />
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
                <WeaponItem register={register} indexName="WI_1" />
                <WeaponItem register={register} indexName="WI_2" />
                <WeaponItem register={register} indexName="WI_3" />
                <WeaponItem register={register} indexName="WI_4" />
                <WeaponItem register={register} indexName="WI_5" />
              </div>
              <div id="character_armor" className="full_width">
                <div className="character_box">
                  <div className="box_header">
                    <div className="cut_corner2 box_header_full horizontal_flex">
                      <p id="weapons_header_left">Armor</p>
                    </div>
                  </div>
                </div>
                <ArmorItem register={register} indexName="AI_1" />
                <ArmorItem register={register} indexName="AI_2" />
                <ArmorItem register={register} indexName="AI_3" />
              </div>
            </motion.div>
            <motion.div
              id="page1_col2"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_capabilities" className="full_width">
                <CapabilitiesTable register={register} />
                <div className="character_box horizontal_flex">
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">
                      Basic Atk Bonus
                    </div>
                    <div className="hex">
                      <input
                        className="hex_input"
                        type="text"
                        {...register("atkBonus")}
                      />
                    </div>
                  </div>
                  <div className="left_hex_item">
                    <div className="cut_corner_topLeft hex_label">
                      Skill Points
                    </div>
                    <div className="hex">
                      <input
                        className="hex_input"
                        type="text"
                        {...register("skillPoints")}
                      />
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
                <FociItem register={register} indexName="FI_1" />
                <FociItem register={register} indexName="FI_2" />
                <FociItem register={register} indexName="FI_3" />
                <FociItem register={register} indexName="FI_4" />
                <FociItem register={register} indexName="FI_5" />
                <FociItem register={register} indexName="FI_6" />
              </div>
              <div id="character_items" className="full_width">
                <div className="character_box">
                  <div className="box_header">
                    <div className="cut_corner_topLeft box_header_full horizontal_flex">
                      <p id="weapons_header_left">Readied Items</p>
                    </div>
                  </div>
                  <ReadyItemRow
                    lastRow={false}
                    register={register}
                    indexName="RIRow_1"
                  />
                  <ReadyItemRow
                    lastRow={true}
                    register={register}
                    indexName="RIRow_2"
                  />
                </div>
                <div id="money_section">
                  <MoneyItem title="Credits" register={register} />
                  <MoneyItem title="Debts" register={register} />
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
                    register={register}
                  />
                  <HexBoxTopRight
                    title="System Strain"
                    hexLabel="Permanent:"
                    rows={3}
                    register={register}
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
                      <SaveHexItem title="Pysical" register={register} />
                      <SaveHexItem title="Evasion" register={register} />
                      <SaveHexItem title="Mental" register={register} />
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
                      <AttributeRightOffset title="STR" register={register} />
                      <AttributeLeftOffset title="DEX" register={register} />
                      <AttributeRightOffset title="CON" register={register} />
                      <AttributeLeftOffset title="INT" register={register} />
                      <AttributeRightOffset title="WIS" register={register} />
                      <AttributeLeftOffset title="CHA" register={register} />
                    </div>
                  </div>
                </div>
              </div>
              <div id="character_cybernetics" className="full_width">
                <StandardBox
                  title="Cybernetics/Innate Abilites"
                  rows={4}
                  columns={1}
                  register={register}
                  indexName="cybernetics"
                />
              </div>
              <div id="character_psionic" className="full_width">
                <StandardBox
                  title="Psionic Techniques"
                  rows={8}
                  columns={1}
                  register={register}
                />
                <HexBoxTopRight
                  title="Psionic Effort"
                  hexLabel="Max:"
                  rows={3}
                  register={register}
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
                  register={register}
                  indexName="stowed"
                />
                <StandardBox
                  title="Non-Encumbering Equipment"
                  rows={5}
                  columns={1}
                  register={register}
                  indexName="non_encumb"
                />
                <StandardBox
                  title="Equipment in Storage"
                  rows={6}
                  columns={1}
                  register={register}
                  indexName="storage_equipment"
                />
                <StandardBox
                  title="Assets/Owned Property"
                  rows={6}
                  columns={1}
                  register={register}
                  indexName="assets"
                />
              </div>
            </motion.div>
            <motion.div
              id="page2_col2"
              className="column"
              variants={sheetColumn}
            >
              <div id="character_other1">
                <StandardBox
                  title="Notes to Remember"
                  rows={9}
                  columns={1}
                  register={register}
                  indexName="notes"
                />
                <StandardBox
                  title="Vehicle, Robot, and Drone Details"
                  rows={9}
                  columns={1}
                  register={register}
                  indexName="drone_robot_vehicle"
                />
                <StandardBox
                  title="Starship Details"
                  rows={12}
                  columns={1}
                  register={register}
                  indexName="starship"
                />
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
                  register={register}
                  indexName="achievements"
                />
                <StandardBox
                  title="Aliases/ID's"
                  rows={6}
                  columns={1}
                  register={register}
                  indexName="aliases"
                />
                <StandardBox
                  title="Contacts and Allies"
                  rows={6}
                  columns={1}
                  register={register}
                  indexName="allies"
                />
                <StandardBox
                  title="Languages Known"
                  rows={3}
                  columns={1}
                  register={register}
                  indexName="languages"
                />
                <StandardBox
                  title="Current Goals"
                  rows={3}
                  columns={1}
                  register={register}
                  indexName="goals"
                />
              </div>
            </motion.div>
          </motion.section>
        </motion.form>
      </main>
    </div>
  );
};

export default CharacterSheet;
