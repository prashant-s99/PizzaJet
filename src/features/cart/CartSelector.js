import { createSelector } from "@reduxjs/toolkit";

const selectTotalCartQuantity = createSelector(
  (state) => state.cart.cart,
  (cart) => cart.reduce((sum, item) => sum + item.quantity, 0),
);

const selectTotalCartPrice = createSelector(
  (state) => state.cart.cart,
  (cart) => cart.reduce((sum, item) => sum + item.totalPrice, 0),
);

const selectCart = createSelector(
  (state) => state.cart,
  (cart) => cart.cart,
);

const selectUser = createSelector(
  (state) => state.user,
  (user) => user.username,
);

export {
  selectUser,
  selectCart,
  selectTotalCartQuantity,
  selectTotalCartPrice,
};
