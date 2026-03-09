import { createSlice } from "@reduxjs/toolkit"


export type TestState = {
  counter1: number,
  counter2: number,
}

const initialState: TestState = {
  counter1: 1,
  counter2: 1,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    upcount1(state) {
      state.counter1 += 1;
    },
    upcount2(state) {
      state.counter2 += 1;
    },
  }
});

export const testActions = testSlice.actions;
export const testReducer = testSlice.reducer;