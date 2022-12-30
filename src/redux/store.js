import { configureStore, createSlice } from '@reduxjs/toolkit';

// export const increment = createAction('handleIncrement');

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
// });

const filterSlice = createSlice({
  name: 'filters',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addContact } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: filterSlice.reducer,
  },
});
