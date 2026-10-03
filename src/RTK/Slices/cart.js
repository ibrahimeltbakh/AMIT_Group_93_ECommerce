import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            let existedProduct = state.find((p) => p.id == action.payload.id)
            if (!existedProduct) {
                let newProduct = { ...action.payload, quantity: 1 }
                state.push(newProduct)
            }
            else {
                existedProduct.quantity++
            }
        }
    }

})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer