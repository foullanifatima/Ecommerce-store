export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const clearItemFromCart = (cartItems, idItemToRemove) => {
  const result = cartItems.filter((item) => item.id !== idItemToRemove)
  return result
}

export const removeItemFromCart = (cartItems, idItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === idItemToRemove
  )
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== idItemToRemove)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === idItemToRemove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
