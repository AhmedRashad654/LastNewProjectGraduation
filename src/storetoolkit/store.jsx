// store.js
import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from '../slice/slice';

const store = configureStore({
    reducer: {
        favoriteproducts: wishListReducer,
    },
});

export default store;
