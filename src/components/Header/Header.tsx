import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'
import { BiTask } from 'react-icons/bi'
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <_HeaderWrapper>
      <_Title>MY PORTFLIO</_Title>
      <AiFillGithub />
      <AiFillInstagram />
      <SiNetlify />
      <BiTask />
    </_HeaderWrapper>
  )
}

const _HeaderWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  border: 1px solid #188FB9;
`

const _Title = styled.p`
  font-size: 55px;
  font-family: 'BreakingBadFont';
`
