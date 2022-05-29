import React, { useEffect } from 'react'
import { Step } from '@/@types/types';
import { SkillTable } from '@/components'
import { StepsState } from '@/slice/stepSlice';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material'

const SkillTables: React.FC = () => {

  const steps = useSelector((state: {steps: StepsState}) => state.steps.value)

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item sm={12} xs={12} md={12} lg={12} xl={6}>
        <SkillTable
          title="Front-End Goal Image"
          link="https://github.com/Yuisei-Maruyama/MyPortfolio"
          frontEndProps={frontEndProps}
        />
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={12} xl={6}>
          <SkillTable
            title="Back-End Goal Image"
            link="https://github.com/Yuisei-Maruyama/MyPortfolio_Backend"
            backEndProps={backEndProps}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SkillTables