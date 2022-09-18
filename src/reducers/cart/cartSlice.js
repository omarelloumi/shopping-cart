import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cart')),
    opened:false,
    total: 0
}

export const increaseCartQuantity = createAsyncThunk(
    'cart/increase',
    async (shop, thunkAPI) => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart.find(item => item.id === shop.id) == null) {
            return [...cart, { id : shop.id , quantity: 1, price : shop.price }]
        } else {
            return cart.map(item => {
                if (item.id === shop.id) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
            })
        }
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

export const decreaseCartQuantity = createAsyncThunk(
    'cart/decrease',
    async (shop, thunkAPI)=>{
        try {
            const cart = JSON.parse(localStorage.getItem('cart'))
            if (cart.find(item => item.id === shop.id).quantity === 1) {
                return cart.filter(item => item.id !== shop.id)
            } else {
                return cart.map(item => {
                    if (item.id === shop.id) {
                      return { ...item, quantity: item.quantity - 1 }
                    } else {
                      return item
                    }
                })
            }
          } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    }
)

export const removeItemFromCart = createAsyncThunk(
    'cart/remove',
    async (shop,thunkAPI) => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart'))
            return cart.filter(item => item.id !== shop.id) 
        } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

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
    reset : (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseCartQuantity.fulfilled, (state, action) => {
        state.cartItems= action.payload
        let total= 0 
        state.cartItems.map((cartItem)=> total += cartItem.quantity * cartItem.price)
        state.total = total
        localStorage.setItem('cart',JSON.stringify(state.cartItems))
      })
      .addCase(decreaseCartQuantity.fulfilled, (state, action) => {
        state.cartItems= action.payload
        let total= 0 
        state.cartItems.map((cartItem)=> total += cartItem.quantity * cartItem.price)
        state.total = total
        localStorage.setItem('cart',JSON.stringify(state.cartItems))
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.cartItems= action.payload
        let total= 0 
        state.cartItems.map((cartItem)=> total += cartItem.quantity * cartItem.price)
        state.total = total
        localStorage.setItem('cart',JSON.stringify(state.cartItems))
      })
  },
})

// Action creators are generated for each case reducer function
export const { 
    reset,
    setIsOpen,
    closeCart,
    openCart
} = cartSlice.actions

export default cartSlice.reducer