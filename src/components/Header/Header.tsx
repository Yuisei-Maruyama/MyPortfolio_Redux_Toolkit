import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { SiMongodb } from 'react-icons/si'
import { BiTask } from 'react-icons/bi'
import { TbBrandVercel } from 'react-icons/tb'
import styled from 'styled-components'

const handleClick = (name: string): React.MouseEventHandler<SVGElement> | undefined => {
  switch (name) {
    case 'Github':
      window.open('https://github.com/Yuisei-Maruyama/MyPortfolio_Redux_Toolkit', '_blank')
      return
    case 'Vercel':
      window.open('https://vercel.com/yuisei-maruyama/my-portfolio-redux-toolkit', '_blank')
      break
    case 'Mongodb':
      window.open('https://cloud.mongodb.com/v2/61339aa1734dde16310d755d#clusters', '_blank')
      return
    case 'Instagram':
      window.open('https://www.instagram.com/y_metro/', '_blank')
      break
    default:
      break
  }
}

const iconList = [
  {
    name: 'TaskBoard',
    tag: BiTask,
  },
  {
    name: 'Github',
    tag: AiFillGithub,
  },
  {
    name: 'Vercel',
    tag: TbBrandVercel,
  },
  {
    name: 'Mongodb',
    tag: SiMongodb,
  },
  {
    name: 'Instagram',
    tag: AiFillInstagram,
  },
]

export const Header: React.FC = () => {
  return (
    <_HeaderWrapper>
      <_Title>MY PORTFLIO</_Title>
      <_IconWrapper>
        {iconList.map((icon, index) => {
          return <icon.tag key={index} onClick={() => handleClick(icon.name)} />
        })}
      </_IconWrapper>
    </_HeaderWrapper>
  )
}

const _HeaderWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #188fb9;
`

const _Title = styled.p`
  font-size: 55px;
  font-family: 'BreakingBadFont';
`

const _IconWrapper = styled.div`
  & > svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: 15px;
  }
`
