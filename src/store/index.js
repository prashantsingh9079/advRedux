import { createSlice,configureStore } from "@reduxjs/toolkit";


const cartInitailState = {show:true}

const cartSlice = createSlice({
    name:'cart',
    initialState:cartInitailState,
    reducers:{
        showCartorHide(state)
        {
            state.show=!state.show
        },
    }
})

const store = configureStore({
    reducer:{cart:cartSlice.reducer}
})

export const cartAction = cartSlice.actions

export default store;