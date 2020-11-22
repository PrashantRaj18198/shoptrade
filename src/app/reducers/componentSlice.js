import { createSlice } from '@reduxjs/toolkit';

export const componentSlice = createSlice({
    name: 'component',
    initialState: {
        tag: 'All Products',
        card: null,
        sort: 'Price low to high',
        selectedProduct: {},
        cartItemCount: 0
    },
    reducers: {
        changeSelection: (state, action) => {
            const { type, value } = action.payload
            state[type] = value
        },
        selectProductSize: (state, action) => {
            state.selectedProduct = action.payload
        },
        increaseCartItemCount: state => {
            state.cartItemCount += 1
        }
    }
})

export const { changeSelection, selectProductSize, increaseCartItemCount } = componentSlice.actions;

export default componentSlice.reducer