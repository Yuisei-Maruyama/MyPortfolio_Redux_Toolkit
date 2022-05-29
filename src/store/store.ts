import { stepSlice } from '@/slice/stepSlice';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';

// storeの作成
export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    steps: stepSlice.reducer
  },
});

// useSelector や useDispatch をTypeScriptで使用するために必要
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
