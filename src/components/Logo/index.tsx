import Image from 'next/image'
import React from 'react'
import BhavyaLogo from '../../../public/BhvyaLogo.png'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Image src={BhavyaLogo} height={50} width={50} style={{borderRadius:10}} alt="Logo"/>
  )
}

export default Logo