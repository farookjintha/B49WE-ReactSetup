import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      //   state.cartItems.push(action.payload);
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // getAllItemsFromCart: (state, action) => {},
  },
});

export default cartSlice.reducer;

export const { addItemToCart, removeItemFromCart, getAllItemsFromCart } =
  cartSlice.actions;
