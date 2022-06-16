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
  reducers: {},
  extraReducers: (builder) => {
    // 非同期実行中、または実行待ち
    builder.addCase(fetchStepsData.pending, (state, _) => {
      state.loading = true
      state.error.status = false
      state.error.message = null
    })
    // 実行が正常完了（エラーなし）
    builder.addCase(fetchStepsData.fulfilled, (state, actions) => {
      state.loading = false
      state.value = new Array(...actions.payload)
    })
    // 実行で何かの異常発生
    builder.addCase(fetchStepsData.rejected, (state, _) => {
      state.loading = true
      state.error.status = true
      state.error.message = 'cant fetched data from MongoDB'
    })
  },
})

export default stepSlice
