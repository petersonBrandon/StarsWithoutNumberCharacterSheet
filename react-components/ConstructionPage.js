import { motion } from "framer-motion";
import Image from "next/image";

const ConstructionPage = () => {
  return (
    <motion.div
      className="construction_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ default: { duration: 0.5 } }}
    >
      <p className="construction_title">This page is not yet ready.</p>
      <p className="construction_title construction_title_bottom">Sorry for the inconvenience.</p>
      <Image src="/astronaut.png" width={150} height={150} responsive />
    </motion.div>
  );
};

export default ConstructionPage;
