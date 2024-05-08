import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./features/counter/quoteSlice";

export default configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});
