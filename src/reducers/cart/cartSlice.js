import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    opened:false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsOpen: (state) => {
        return state.opened = !state.opened
    },
    closeCart: (state) => {
        return state.opened = false
    },
    openCart: (state) => {
        return state.opened = true
    },
    getItemQuantity: (state,action) => {
        return state.cartItems.find(item => item.id === action.payload.id).quantity || 0
    },
    increaseCartQuantity: (state, action) => {
        if (state.cartItems.find(item => item.id === action.payload.id) == null) {
            return [...state.cartItems, { id : action.payload.id , quantity: 1 }]
        } else {
            return state.cartItems.map(item => {
                if (item.id === action.payload.id) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
            })
        }
    },
    decreaseCartQuantity: (state, action) => {
        if (state.cartItems.find(item => item.id === action.payload.id) === 1) {
            return state.cartItems.filter(item => item.id !== action.payload.id)
        } else {
            return state.cartItems.map(item => {
                if (item.id === action.payload.id) {
                  return { ...item, quantity: item.quantity - 1 }
                } else {
                  return item
                }
            })
        }
    },
    removeItemFromCart: (state, action) => {
        return state.cartItems.filter(item => item.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setIsOpen, 
    closeCart, 
    openCart, 
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity, 
    removeItemFromCart
} = cartSlice.actions

export default cartSlice.reducer