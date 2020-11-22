import { createSlice } from '@reduxjs/toolkit';

export const componentSlice = createSlice({
    name: 'component',
    initialState: {
        // the selected tag - default 'All Products'
        tag: 'All Products',
        // id of product on which the user is currently hovering
        hoveredProductId: null,
        // sort details
        sort: 'Price low to high',
        selectedProduct: {},
        cartItemCount: 0
    },
    reducers: {
        // change different data
        changeSelection: (state, action) => {
            const { type, value } = action.payload
            state[type] = value
        },
        // handle event when the size of a product is clicked
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