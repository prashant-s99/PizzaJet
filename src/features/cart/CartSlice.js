import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //payload=newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      //payload=pizzaId
      state.cart = state.cart.filter((item) => {
        return item.pizzaId !== action.payload;
      });
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

//Using selector whithout using 'Redux-Reselect' library's 'createSelector()' function causes performance issues.

// export const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce(function (sum, item) {
//     return sum + item.totalPrice;
//   }, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
