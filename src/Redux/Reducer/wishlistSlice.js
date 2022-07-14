import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    value: 0,
    wishlist:[]
  },
  reducers: {
    wishlistincrement: (state,action) => {
        const { payload } = action;
        const item = state.wishlist.find(
          product => product.id === payload.id,
        );
        if (item) {
            return {
              ...state,
              wishlist: state.wishlist.map(item => item.id === payload.id
                ? {
                  ...item,
                  qty: item.qty + 1,
                }
                : item
              ),
            };
          }
        
          return {
            ...state,
            wishlist: [...state.wishlist, payload],
             value: state.value +1,
          };
           
     
    },
    removeFromWishlist: (state,action) => {
        const { payload } = action;
        const item = state.wishlist.find(
          product => product.id === payload.id,
        );
        if (item) {
            const index = state.wishlist.indexOf(item);
            console.log(state.wishlist)
            return {
              ...state,
              value: state.value -1

              
            };
          }
        
        
     
    },
    },
})

// Action creators are generated for each case reducer function
export const { wishlistincrement, removeFromWishlist, incrementByAmount } = wishlistSlice.actions

export default wishlistSlice.reducer