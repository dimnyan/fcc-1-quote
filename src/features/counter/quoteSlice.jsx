import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quoteObj: null,
  },

  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    updateQuote: (state, action) => {
      state.quoteObj = action.payload;
    },
  },
});

export const { updateQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
