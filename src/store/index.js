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

const cartItemSlice = createSlice(
    {
        name:'cartItem',
        initialState:{itemsList:[], cartNumber:0},
        reducers:{
            addItem(state,action)
            {
                state.itemsList.push(action.payload.obj);
                
            },
            removeItem(state)
            {

            },
            increaseQTY(state)
            {
                state.cartNumber++;
            },
            decreaseQTY(state)
            {
                state.cartNumber--;
            }

        }
    }
)

const store = configureStore({
    reducer:{cart:cartSlice.reducer, cartItem:cartItemSlice.reducer}
})

export const cartAction = cartSlice.actions
export const cartItemAction = cartItemSlice.actions

export default store;