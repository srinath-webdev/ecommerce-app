import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    newCategory:  (state, action) => {
      state.allProducts = action.payload;
    },
    filterProduct: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setProducts , newCategory , filterProduct } = productsSlice.actions;

export default productsSlice.reducer;
