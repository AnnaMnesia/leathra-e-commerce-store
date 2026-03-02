import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    addToSaved: (state, action) => {
      const existing = state.products.find((item) => item.id === action.payload.id);
      if (!existing) {
        state.products.push(action.payload);
      }
    },
    removeSavedItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    resetSaved: (state) => {
      state.products = [];
    },
  },
});

export const { addToSaved, removeSavedItem, resetSaved } = savedSlice.actions;

export default savedSlice.reducer;
