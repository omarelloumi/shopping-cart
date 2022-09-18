import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cart')),
    opened:false
}

export const increaseCartQuantity = createAsyncThunk(
    'cart/increase',
    async (id, thunkAPI) => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart.find(item => item.id === id) == null) {
            return [...cart, { id : id , quantity: 1 }]
        } else {
            return cart.map(item => {
                if (item.id === id) {
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
    async (id, thunkAPI)=>{
        try {
            const cart = JSON.parse(localStorage.getItem('cart'))
            if (cart.find(item => item.id === id).quantity === 1) {
                return cart.filter(item => item.id !== id)
            } else {
                return cart.map(item => {
                    if (item.id === id) {
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
    async (id,thunkAPI) => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart'))
            return cart.filter(item => item.id !== id) 
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
        localStorage.setItem('cart',JSON.stringify(state.cartItems))
      })
      .addCase(decreaseCartQuantity.fulfilled, (state, action) => {
        state.cartItems= action.payload
        localStorage.setItem('cart',JSON.stringify(state.cartItems))
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.cartItems= action.payload
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