import { Step } from '@/@types/types'
import { createSlice } from '@reduxjs/toolkit'

export type StepsState = {
  value: Step[]
}

const initialState: StepsState = {
  value: [],
}

export const stepSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setSteps: (state, actions: { payload: Step[] }) => {
      state.value = actions.payload
    },
  },
})

export const { setSteps } = stepSlice.actions
export default stepSlice
