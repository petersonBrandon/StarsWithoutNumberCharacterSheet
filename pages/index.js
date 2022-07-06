import Head from 'next/head'
import { useEffect } from 'react'
import Spinner from '../react-components/Spinner'

export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      window.location = '/auth/Login';
    }, 5000)
  })

  return (
    <div className="index_container">
      <Head>
        <title>Stars Without Number</title>
        <meta name="description" content="Stars Without Number" />
        <link rel="icon" href="/SWNLogoStaticAlt.ico" />
      </Head>

      <main className="index_main_container">
        <Spinner />
      </main>
    </div>
  )
}
