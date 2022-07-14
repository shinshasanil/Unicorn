import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    cartlist:[]
  },
  reducers: {
    cartincrement: (state,action) => {
     
      const { payload } = action;
        const item = state.cartlist.find(
          product => product.id === payload.id,
        );
        if (item) {
            return {
              ...state,
              cartlist: state.cartlist.map(item => item.id === payload.id
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
            cartlist: [...state.cartlist, payload],
             value: state.value +1,
          };
           
     
    },
    
    removeFromCart: (state,action) => {
      const { payload } = action;
        const item = state.cartlist.find(
          product => product.id === payload.id,
        );
        if (item) {
            return {
              ...state,
              value: state.value +1,
              
            };
          }
        
      
    },},
   
})

// Action creators are generated for each case reducer function
export const { cartincrement, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer