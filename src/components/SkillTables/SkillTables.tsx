import React from 'react'
// import { GetStaticProps } from 'next'
// import axios from 'axios';
import { Step } from '@/@types/types';
import { SkillTable } from '@/components'

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await axios.get("http://localhost:3000/api/steps");
//   const steps: Step[] = res.data
//   return { props: { steps } }
// }

type Props = {
  steps: Step[]
}

const SkillTables: React.FC<Props> = (props: Props) => {

  const { steps } = props

  const frontEndProps: Step[] = []
  const backEndProps: Step[] = []

  steps.forEach(step => {
    if (step.genre === 'FrontEnd') {
      frontEndProps.push(step)
    }
    if (step.genre === 'BackEnd') {
      backEndProps.push(step)
    }
  })

  return (
    <>
      <SkillTable
        title="Front-End Goal Image"
        link="https://github.com/Yuisei-Maruyama/MyPortfolio"
        frontEndProps={frontEndProps}
      />
      <SkillTable
        title="Back-End Goal Image"
        link="https://github.com/Yuisei-Maruyama/MyPortfolio_Backend"
        backEndProps={backEndProps}
          />
    </>
  )
}

export default SkillTables