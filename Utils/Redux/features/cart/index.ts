import { createSlice } from '@reduxjs/toolkit'

const initialState: { [key: string]: number } = {}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }: { payload: string }) => {
      const amount = state[payload] || 0
      state[payload] = amount + 1
    },
    decrement: (state, { payload }: { payload: string }) => {
      const amount = state[payload]

      if (!amount) {
        return
      }

      if (amount === 1) {
        delete state[payload]
        return
      }

      state[payload] = amount - 1
    },
    delete: (state, { payload }: { payload: string }) => {
      delete state[payload]
    },
    reset: () => initialState,
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions