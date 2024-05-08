import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quoteObj: null,
    color: "",
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
      state.color = Math.floor(Math.random() * 16777215).toString(16) + 40;
    },
    // updateColor: (state) => {},
  },
});

export const { updateQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
