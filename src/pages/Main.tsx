import React from 'react'
// import type { GetStaticProps } from 'next'
import styled from 'styled-components'
import { Step } from '@/@types/types'
import { SkillTables } from '@/components'

type Props = {
  steps?: Step[]
}

interface TextProps {
  color?: string
}

// // SSG処理
// export const getStaticProps: GetStaticProps = async () => {
//   const req = await axios.get('http://localhost:3000/api/steps')
//   const steps: Step[] = req.data
//   return { props: { steps } }
// }

const Main: React.FC<Props> = ({ steps }) => {
  return (
    <_Container>
      <_Test>aaaaaa</_Test>
      <_Text>My Portfolio_Redux</_Text>
      <SkillTables></SkillTables>
    </_Container>
  )
}

const _Container = styled.div`
  padding: 0;
`

const _Test = styled.p`
  color: primary;
`

const _Text = styled.p<TextProps>`
  font-size: 30px;
  color: ${(p) => p.color};
`

export default Main
