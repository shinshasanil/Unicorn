import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Redux/Reducer/cartSlice'
import wishlistReducer from './Redux/Reducer/wishlistSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
})