import React from 'react'
import Image from 'next/image'
import Spinner_svg from '/public/SWNLogoAnimatedCSS.svg'

const Spinner = () => {
  return (
    <Image src={Spinner_svg} alt="Loading..." width={300} height={300} responsive/>
  )
}

export default Spinner