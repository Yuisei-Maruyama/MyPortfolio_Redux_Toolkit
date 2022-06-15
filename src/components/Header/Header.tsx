import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'
import { BiTask } from 'react-icons/bi'

export const Header: React.FC = () => {
  return (
    <div>
      <p>MY PORTFLIO</p>
      <AiFillGithub />
      <AiFillInstagram />
      <SiNetlify />
      <BiTask />
    </div>
  )
}
