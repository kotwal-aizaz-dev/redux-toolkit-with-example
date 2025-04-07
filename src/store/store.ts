import { configureStore } from "@reduxjs/toolkit";

// Reducer imports 
import counterReducer from "../counter/counterSlice";
// store config 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// typescript specific
// state type
export type RootState = ReturnType<typeof store.getState>;

// dispatch type
export type AppDispatch = typeof store.dispatch;
