import { ShopTypes } from './shop.types'

const INITIAL_STATE = {
  collections: null,
  itemsByCategory: null,
  singleProduct: null,
}

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.GET_SHOP_DATA_BY_CATEGORY:
      return {
        ...state,
        itemsByCategory: action.payload,
      }
    case ShopTypes.GET_SHOP_DATA_FROM_API:
      return {
        ...state,
        collections: action.payload,
      }
    case ShopTypes.GET_SINGLE_PRODUCT_BY_ID:
      return {
        ...state,
        singleProduct: action.payload,
      }
    default:
      return state
  }
}

export default ShopReducer
