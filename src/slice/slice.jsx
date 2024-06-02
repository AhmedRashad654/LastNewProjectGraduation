


import { createSlice } from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
    name: 'favoriteproducts',
    initialState: {
        products: [], 
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.products.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
    }
});

export const { addToFavorites, removeFromFavorites } = wishListSlice.actions;
const  wishListReducer= wishListSlice.reducer;
export default wishListReducer
