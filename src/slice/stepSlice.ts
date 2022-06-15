import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { Step } from '@/@types/types'

export type StepsState = {
  value: Step[]
  loading: boolean
  error: {
    status: boolean
    message: string | null
  }
}

const initialState: StepsState = {
  value: [],
  loading: false,
  error: {
    status: false,
    message: null,
  },
}

const base = 'http://localhost:3000'

export const fetchStepsData = createAsyncThunk('api/steps', async () => {
  const result: AxiosResponse<Step[]> = await axios.get(`${base}/api/steps`)
  return result.data
})

export const stepSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setSteps: (state, actions: { payload: Step[] }) => {
      state.value = actions.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStepsData.pending, (state, _) => {
      // 非同期実行中、または実行待ち
      state.loading = true
      state.error.status = false
      state.error.message = null
    })
    builder.addCase(fetchStepsData.fulfilled, (state, actions) => {
      // 実行が正常完了（エラーなし）
      state.loading = false
      state.value = new Array(...actions.payload)
    })
    builder.addCase(fetchStepsData.rejected, (state, _) => {
      // 実行で何かの異常発生
      state.loading = true
      state.error.status = true
      state.error.message = 'cant fetched data from MongoDB'
    })
  },
})

export default stepSlice
