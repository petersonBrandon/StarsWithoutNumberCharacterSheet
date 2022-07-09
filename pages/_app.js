import '../styles/globals.css'
import '../styles/index.css'
import '../styles/login.css'
import '../styles/characterSheet.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

function MyApp({ Component, pageProps, router }) {
  const router = useRouter();

  if(isMobile) {
    router.push("/MobileBlock");
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp
