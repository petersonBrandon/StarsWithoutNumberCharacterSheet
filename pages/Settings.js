import Head from "next/head";
import { motion } from "framer-motion";
import NavMenu from "../react-components/NavMenu";
import ConstructionPage from "../react-components/ConstructionPage";

const Settings = () => {
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
        <ConstructionPage />
      </main>
    </div>
  )
}

export default Settings