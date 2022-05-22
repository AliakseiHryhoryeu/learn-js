import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { cartReducer } from './cart/cart.slice'
import { productApi } from './product/product.api'

export const store = configureStore({
	reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>
