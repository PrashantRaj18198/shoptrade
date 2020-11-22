import { 
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import API from '../../api/api';

const initialState = {
    products: [],
    allTags: [],
    status: 'idle',
    error: null
}

export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async () => {
        return await API('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json')
    }
)

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products.push(...action.payload)

            let allTags = new Set(['All Products'])
            for (const product of action.payload) {
                allTags.add(product.tag)
            }
            state.allTags.push(...allTags)
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default shopSlice.reducer;