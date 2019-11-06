import { createSelector } from 'reselect';

const selectCard = state => state.cart;

export const selectCardItems = createSelector(
  [selectCard],
  cart => cart.cartItems
);

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);