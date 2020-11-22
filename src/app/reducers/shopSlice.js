import { 
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import API from '../../api/api';

const initialState = {
    // list of products
    products: [],
    // list of all the tags
    allTags: [],
    // current status of request - default = idle
    status: 'idle',
    error: null
}

// handles promises gracefully
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
        // run reducers on status change
        // request just send - change status to loading
        [getProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // set all the products
            state.products.push(...action.payload)

            // set all the distinct tags
            let allTags = new Set(['All Products'])
            for (const product of action.payload) {
                allTags.add(product.tag)
            }
            state.allTags.push(...allTags)
        },
        [getProducts.rejected]: (state, action) => {
            // handle error
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default shopSlice.reducer;