import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer  // this is same as transactions array ie, transaction: [...]
  }
})

// this means : store -> transactions -> transactionSlice : we can refer this array like "store.transactions"

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
