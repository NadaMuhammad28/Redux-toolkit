import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";
const initialState = { isLoading: false, amount: 0, total: 0, cart: [] };

export const getcartitems = createAsyncThunk("cart/getcartitems", async () => {
  try {
    const res = await fetch(
      "https://course-api.com/react-useReducer-cart-project"
    );
    return res.json();
  } catch (e) {
    console.log(e.message);
  }
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItem: (state, action) => {
      let cartItem = state.cart.find((item) => item.id === action.payload);
      cartItem.amount++;

      // state.cart = [...state.cart, cartItem];
    },

    decrease: function (state, action) {
      let cartItem = state.cart.find((item) => item.id === action.payload);

      cartItem.amount--;
    },

    caclTotals: (state) => {
      let { amount, total } = state.cart.reduce(
        (p, c) => {
          p.amount = p.amount + c.amount;
          p.total = p.total + c.amount * c.price;
          return p;
        },
        { amount: 0, total: 0 }
      );

      state.amount = amount;
      state.total = total.toFixed(3);
    },
  },

  extraReducers: {
    [getcartitems.pending]: (state) => {
      state.isLoading = true;
    },

    [getcartitems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cart = action.payload;
    },

    [getcartitems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

console.log(cartSlice);
export const { clearCart, removeItem, increaseItem, decrease, caclTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
