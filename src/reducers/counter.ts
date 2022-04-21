import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    customNumber: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += state.customNumber || 1;
    },
    decrement: (state) => {
      state.value -= state.customNumber || 1;
    },
    customNumber: (state, action) => {
      state.customNumber = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, customNumber } = counterSlice.actions

export default counterSlice.reducer
