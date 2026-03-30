import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
   numberSelect: number,
   params: "All" | "Image" | "Videos" | "Document"}

const initialState: FilterState = {
   numberSelect: 1,
   params: "All"}

const FilterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
     setFilter: (state, action: PayloadAction<number>) => {
       const map: Record<number, FilterState['params']> = {
        4: 'All',
        5: 'Image',
        6: 'Videos',
        7: 'Document',
      }
      state.params = map[action.payload] ?? 'All';
      state.numberSelect = action.payload;
     } 
   }})

export const { setFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
