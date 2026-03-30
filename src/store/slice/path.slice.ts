import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Path {
  pathName: string}

const initialState: Path = {
  pathName: '/'}

const PathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.pathName = action.payload}
  }
 });

 export const { setPath } = PathSlice.actions;
 export default PathSlice.reducer;
