import Head from 'next/head'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Image from 'next/image';

const CreateAccount = () => {
  const loginContainer = useAnimation();
  const loginElements = useAnimation();
  const logoControl = useAnimation();

  const [isLoading, setIsLoading] = useState(false)

  const sequence = async () => {
    await loginContainer.start({ scaleX: 1, transition: { duration: 0.5 } })
    await loginContainer.start({ scaleY: 1 })
    await loginElements.start({ opacity: 1 })
    await logoControl.start({ opacity: 1, transition: { duration: 1 } })
  }

  useEffect(() => {
    sequence();
  }, []);

  const [isEmailValid, setIsEmailValid] = useState(true)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const createAccount = async (data) => {
    await loginElements.start({ opacity: 0 })
    await loginContainer.start({ scaleY: 0 })
    await loginContainer.start({ scaleX: 0, transition: { duration: 0.5 } })
    await logoControl.start({ translateY: 225, scale: 1.33, transition: { duration: 0.5 } })
    setIsLoading(true)
    await setTimeout(async () => {
      if(data.email != "1@1.1") {
        setIsLoading(false)
        await logoControl.start({ translateY: 0, scale: 1, transition: { duration: 0.5 } })
        await loginContainer.start({ scaleX: 1, transition: { duration: 0.5 } })
        await loginContainer.start({ scaleY: 1 })
        await loginElements.start({ opacity: 1 })
        setIsEmailValid(false);
      }
    }, 10000)
  }

  return (
    <div className="index_container">
      <Head>
        <title>Stars Without Number</title>
        <meta name="description" content="Stars Without Number" />
        <link rel="icon" href="/SWNLogoStaticAlt.ico" />
      </Head>

      <main className="index_main_container">
        <motion.div id='static_logo' initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={logoControl}>
          {isLoading ?
            <object type="image/svg+xml" data='/SWNLogoAnimatedCSS.svg' alt="Loading..." width={200} height={200}/>
            :
            <Image src='/SWNLogoStaticAlt.svg' width={200} height={200}/>
          }
        </motion.div>
        <motion.div className='login_container' initial={{ scaleX: 0, scaleY: 0.05 }} animate={loginContainer} exit={{ scaleY: 0 }} transition={{ default: { duration: 0.25 } }}>
          <motion.form className='login_form' onSubmit={handleSubmit(createAccount)} initial={{ opacity: 0 }} animate={loginElements} exit={{ opacity: 0 }}>
            {isEmailValid ? 
              <div className='message_placeholder'></div>  
              :
              <motion.div className='error_message' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}>
                email is already used
              </motion.div>
            }
            <input className='login_item login_input' type='email' placeholder='email' {...register("email", { required: true })}/>
            <input className='login_item login_input' type='email' placeholder='confirm email' {...register("confirm-email", { required: true })}/>
            <input className='login_item login_input' type='username' placeholder='username' {...register("username", { required: true })}/>
            <input className='login_item login_input' type='password' placeholder='password' {...register("password", { required: true })}/>
            <input className='login_item login_input' type='password' placeholder='confirm password' {...register("confirm-password", { required: true })}/>
            <button className='login_item logInbtn' type='submit'>Create Account</button>
          </motion.form>
        </motion.div>
      </main>
    </div>
  )
}

export default CreateAccount