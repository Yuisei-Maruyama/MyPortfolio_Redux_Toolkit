import React from 'react'
import { Box, StepLabel, Stepper as BaseStepper, Step } from '@mui/material'
import styled from 'styled-components'

type Props = {
  steps: string[]
  activeStep: number
}

const Stepper: React.FC<Props> = (props: Props) => {
  const { steps, activeStep } = props

  return (
    <Box sx={{ width: '100%' }}>
      <$StepperWrapper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </$StepperWrapper>
    </Box>
  )
}

const $StepperWrapper = styled(BaseStepper)`
  & .MuiStepIcon-root.Mui-active {
    border-radius: 50%;
    box-shadow:
    0 0 10px azure,
    0 0 20px aqua,
    0 0 25px blue,
    0 0 30px dodgerblue;
  }
  & .MuiStepLabel-label.Mui-completed {
    color: white;
  }
  & .MuiStepLabel-label.Mui-active {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`

export default Stepper
