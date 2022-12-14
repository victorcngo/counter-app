import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  isPrime: boolean;
}

export interface PayloadActionProps {
  number: number;
  isPrime: boolean;
}

const initialState: CounterState = {
  value: 0,
  isPrime: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<PayloadActionProps>) => {
      state.value += action.payload.number;
      state.isPrime = action.payload.isPrime;
      /* Debug */
      console.log('+ ' + action.payload.number + ", " + action.payload.isPrime);
    },
    decrement: (state, action: PayloadAction<PayloadActionProps>) => {
      state.value -= action.payload.number;
      state.isPrime = action.payload.isPrime;
      /* Debug */
      console.log('- ' + action.payload.number + ", " + action.payload.isPrime);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export const selectIsPrime = (state: RootState) => state.counter.isPrime;

export default counterSlice.reducer;
