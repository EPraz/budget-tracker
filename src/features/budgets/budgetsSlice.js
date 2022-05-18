import { createSlice } from '@reduxjs/toolkit';
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    // set editBudget equal to a case reducer that receives two arguments - state and action
    editBudget: (state, action) => {
      //action.payload will have a category and amount property
      const { category, amount } = action.payload
      //Update the state by finding the budget Object
      //Note: the variables category and action, implemented below, are each assigned
      //ex. category = action.payload category
      //ex. amount = action.payload.category
      //the budget object whose .category value matches action.payload.category and action.payload.amount
      state.find(budget => budget.category === category).amount = amount;
    }
  }
})

// export const { myActionCreator } = muUSlice.actions;
export const { editBudget } = budgetsSlice.actions;


// export const editBudget = (budget) => {
//   return {
//     type: 'budgets/editBudget',
//     payload: budget
//   }
// }


// const budgetsReducer = (state = initialState, action) => {
  //   switch (action.type) {
    //     case 'budgets/editBudget':
//       const newBudgets = state.map(budget => {
  //         if (budget.category === action.payload.category) {
    //           return action.payload;
    //         }
    //         return budget;
    //       })
    //       return newBudgets;
    //     default:
    //       return state;
    //   }
    // }
    
    export const selectBudgets = (state) => state.budgets;
    // export default budgetsReducer;
    
    export default budgetsSlice.reducer;