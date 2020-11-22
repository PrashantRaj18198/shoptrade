import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './reducers/shopSlice';
import componentReducer from './reducers/componentSlice';

export default configureStore({
    reducer: {
        shop: shopReducer,
        component: componentReducer
    }
})