import React, { useEffect } from 'react'
import type { GetStaticProps } from 'next'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Step } from '@/@types/types'
import axios from 'axios'
import { setSteps } from '@/slice/stepSlice'
import {SkillTables } from '@/components'
import variables from '../styles/variables.module.scss'

type Props = {
  steps?: Step[]
}

interface TextProps {
  color?: string
}

// SSG処理
export const getStaticProps: GetStaticProps = async () => {
  const req = await axios.get('http://localhost:3000/api/steps')
  const steps: Step[] = req.data
  return { props: { steps } }
}

const Main: React.FC<Props> = ({ steps }) => {

  // // src/store/store.ts の counter を指している。
  const dispatch = useDispatch()

  useEffect(() => {
    if (!steps) return
    dispatch(setSteps(steps))
  }, [])

  return (
    <_Container>
      <p style={{ color: variables.primaryColor }}>aaaaaa</p>
      <_Text>My Portfolio_Redux</_Text>
      <SkillTables></SkillTables>
    </_Container>
  );
}

const _Container = styled.div`
  padding: 0;
`

const _Text = styled.p<TextProps>`
  font-size: 30px;
  color: ${(p) => p.color};
`

export default Main;