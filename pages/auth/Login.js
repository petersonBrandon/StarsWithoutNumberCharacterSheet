import Head from 'next/head'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const Login = () => {
  const loginContainer = useAnimation();
  const loginElements = useAnimation();
  const logoControl = useAnimation();

  const sequence = async () => {
    await loginContainer.start({ scaleX: 1, transition: { duration: 0.5 } })
    await loginContainer.start({ scaleY: 1 })
    await loginElements.start({ opacity: 1, transition: { staggerChildren: 0.5, default: { duration: 0.25 } }})
    await logoControl.start({ opacity: 1, transition: { duration: 1 } })
  }

  useEffect(() => {
    sequence();
  }, []);

  return (
    <div className="index_container">
      <Head>
        <title>Stars Without Number</title>
        <meta name="description" content="Stars Without Number" />
        <link rel="icon" href="/SWNLogoStaticAlt.ico" />
      </Head>

      <main className="index_main_container">
        <motion.div id='static_logo' initial={{ opacity: 0 }} animate={logoControl}>
          <Image src='/SWNLogoStaticAlt.svg' width={200} height={200}/>
        </motion.div>
        <motion.div className='login_container' initial={{ scaleX: 0, scaleY: 0.05 }} animate={loginContainer} transition={{ default: { duration: 0.25 } }}>
          <motion.form className='login_form' initial={{ opacity: 0 }} animate={loginElements}>
            <input className='login_item login_input' type='username' placeholder='username' />
            <input className='login_item login_input' type='password' placeholder='password' />
            <button className='login_item logInbtn' type='submit'>Log In</button>
          </motion.form>
        </motion.div>
      </main>
    </div>
  )
}

export default Login