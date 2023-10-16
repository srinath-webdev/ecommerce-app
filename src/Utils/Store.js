import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './appSlice'; // Define your products slice

 const store = configureStore({
  reducer: {
    products: productsReducer, //  products slice to the store
  },
});

export default store;
