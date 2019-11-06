import { createSelector } from 'reselect';

const selectCard = state => state.cart;

export const selectCardItems = createSelector(
  [selectCard],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCard],
  cart => cart.hidden
);

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCardTotal = createSelector(
  [selectCardItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)