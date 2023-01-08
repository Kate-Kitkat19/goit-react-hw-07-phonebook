import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addContact(state, action) {
      state.data.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
