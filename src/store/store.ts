import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';

// storeの作成
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
