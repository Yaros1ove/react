import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./features/cart"
import { movieApi } from "./services/movieApi"
import { filterReducer } from "./features/filter"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: true,
})

export type StateType = ReturnType<typeof store.getState>