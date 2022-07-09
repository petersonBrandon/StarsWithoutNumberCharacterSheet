import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import NavMenu from "../react-components/NavMenu";

const Error404 = () => {
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
          className="construction_page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ default: { duration: 0.5 } }}
        >
          <p className="construction_title">404 ERROR</p>
          <p className="construction_title construction_title_bottom">
            Page not found.
          </p>
          <Image src="/astronaut.png" width={125} height={125} responsive />
        </motion.div>
      </main>
    </div>
  );
};

export default Error404;
