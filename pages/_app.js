import '../styles/globals.css'
import '../styles/index.css'
import '../styles/login.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp
