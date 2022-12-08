import { createSelector } from 'reselect'

const cartSelector = (state) => state.cart

export const selectCartItems = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, object) => {
      return accumulator + object.quantity
    }, 0)
)

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, object) => {
      return accumulator + object.price * object.quantity
    }, 0)
)
