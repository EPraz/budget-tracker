import {createSlice} from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]));

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      let {category} = action.payload;
      state[category].push(action.payload);
      return state;
    },


  deleteTransaction: (state, action) => {
    let {category, id} = action.payload;
    let newArr = state[category].filter(trans => trans.id !== id);
    state[category] = newArr;
    return state;
  }

  }
});

export const {addTransaction, deleteTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);


