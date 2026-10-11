import { type Transaction } from './../../utils/transactionTypes';
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Transaction[] = [];

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    // we have to add, remove and update the existing transactions
    addTransaction: (state, action : PayloadAction<Transaction>) => {
      state.push(action.payload)
    }, 

    removeTransaction: (state, action: PayloadAction<Transaction>) => {
      return state.filter((transactions) => transactions.id !== action.payload.id);
    }, 

    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      // index of the element which needs to be updated
      const index = state.findIndex((transaction) => transaction.id === action.payload.id)

      if (index !== -1) {
        state[index] = action.payload
      } 
    }, 
  }

})

// destructuring the transaction reducer object 
export const {
  addTransaction,
  removeTransaction,
  updateTransaction
} = transactionSlice.actions;  // why is .actions and not reducer, as all these functions are inside reducer object

export default transactionSlice.reducer; // why are we exporting reducer ? 
