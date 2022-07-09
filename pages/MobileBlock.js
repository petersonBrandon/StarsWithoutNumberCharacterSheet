import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const MobileBlock = () => {
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
        <motion.div
          className="construction_page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ default: { duration: 0.5 } }}
        >
          <p className="construction_title">Mobile broswers not supported</p>
          <p className="construction_title construction_title_bottom">
            Please use a desktop/laptop.
          </p>
          <Image src="/astronaut.png" width={125} height={125} responsive />
        </motion.div>
      </main>
    </div>
  )
}

export default MobileBlock