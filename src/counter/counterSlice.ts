import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// type
interface CounterState {
  value: number;
}

// initial state
const initialState: CounterState = {
  value: 0,
};

// creating slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // action with a payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // adding async reducers / actions
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync pending...");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          console.log("incrementAsync fulfilled!");
          state.value += action.payload;
        }
      );
  },
});

// Thunks (Async actions)
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

//export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//export reducer
export default counterSlice.reducer;
