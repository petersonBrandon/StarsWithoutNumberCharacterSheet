import CapabilityRow from "./CapabilityRow";

const CapabilitiesTable = () => {
  return (
    <div className="character_box">
      <CapabilityRow
        topLeft={true}
        bottomRight={false}
        col1="Administer"
        col2="Pilot"
        col3="Work"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Connect"
        col2="Program"
        col3="Biosionics"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Exert"
        col2="Punch"
        col3="Metapsionics"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Fix"
        col2="Shoot"
        col3="Precognition"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Heal"
        col2="Sneak"
        col3="Telekinesis"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Know"
        col2="Stab"
        col3="Telepathy"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Lead"
        col2="Survive"
        col3="Teleportation"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={false}
        col1="Notice"
        col2="Talk"
        col3="-"
      />
      <CapabilityRow
        topLeft={false}
        bottomRight={true}
        col1="Perform"
        col2="Trade"
        col3="-"
      />
    </div>
  );
};

export default CapabilitiesTable;
