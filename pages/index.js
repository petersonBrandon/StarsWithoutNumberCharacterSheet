import Head from 'next/head'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Spinner from '../react-components/Spinner'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(async () => {
      router.push('/auth/Login')
    }, 4550)
  })

  return (
    <div className="index_container" >
      <Head>
        <title>Stars Without Number</title>
        <meta name="description" content="Stars Without Number" />
        <link rel="icon" href="/SWNLogoStaticAlt.ico" />
      </Head>

      <main className="index_main_container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ default: { duration: 0.5 } }}>
          <Spinner />
        </motion.div>
      </main>
    </div>
  )
}
