import Image from 'next/image'
import React from 'react'
import BhavyaLogo from '../../../public/BhvyaLogo.png'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Image src={BhavyaLogo} height={100} width={100} alt="Logo"/>
  )
}

export default Logo