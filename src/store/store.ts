import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice/filter.slice';
import pathReducer from './slice/path.slice.ts';

export const store = configureStore({
  reducer: {
    filter: filterReducer, 
    path: pathReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
