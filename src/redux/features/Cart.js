import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        product => product.id === action.payload.id,
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.products.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find(
        product => product.id === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(
        product => product.id === action.payload,
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.products = state.products.filter(
            product => product.id !== action.payload,
          );
        }
      }
    },
  },
});

export const {addToCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
