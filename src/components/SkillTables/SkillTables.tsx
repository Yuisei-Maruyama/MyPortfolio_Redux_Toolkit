import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStepsData, StepsState } from '@/slice/stepSlice'
import { AppDispatch } from '@/store/store'
import { Step } from '@/@types/types'
import { SkillTable } from '@/components'
import { Box, Grid } from '@mui/material'

const SkillTables: React.FC = () => {
  // src/store/store.ts の counter を指している。
  const steps = useSelector((state: { steps: StepsState }) => state.steps.value)
  const dispatch: AppDispatch = useDispatch()
  const fetchSteps = useCallback(() => {
    dispatch(fetchStepsData())
  }, [dispatch])
  // Stepper部分が再レンダリングされないので、やむ追えずstateに変化を与えることで対処する
  const [stepsData, setStepsData] = useState<Step[]>([])

  useEffect(() => {
    if (steps.length === 0) return fetchSteps()
    setStepsData(steps)
  }, [fetchSteps, steps])

  const frontEndProps: Step[] = []
  const backEndProps: Step[] = []

  steps.forEach((step) => {
    if (step.genre === 'FrontEnd') {
      frontEndProps.push(step)
    }
    if (step.genre === 'BackEnd') {
      backEndProps.push(step)
    }
  })

  return stepsData && steps.length ? (
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
  ) : (
    <></>
  )
}

export default SkillTables
