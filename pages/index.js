import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
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
          <Image src='/SWNLogoAnimatedCSS.svg' alt="Loading..." width={300} height={300} responsive/>
        </motion.div>
      </main>
    </div>
  )
}
