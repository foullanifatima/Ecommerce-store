import { ShopTypes } from './shop.types'

import axios from 'axios'

export const getProducts = () => {
  console.log('Get products')

  return (dispatch) => {
    axios
      .get(`https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products`)
      .then((res) => {
        const data = res.data

        dispatch({
          type: ShopTypes.GET_SHOP_DATA_FROM_API,
          payload: data,
        })
      })
  }
}
export const getProductBycategory = (category) => {
  return (dispatch) => {
    axios
      .get(`https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products`)
      .then((res) => {
        const data = res.data.filter(
          (collection) => collection.title === category
        )
        dispatch({
          type: ShopTypes.GET_SHOP_DATA_BY_CATEGORY,
          payload: data,
        })
      })
  }
}
export const GetProductById = (id) => {
  return (dispatch) => {
    axios
      .get(`https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products/${id}`)
      .then((res) => {
        const data = res.data
        dispatch({
          type: ShopTypes.GET_SINGLE_PRODUCT_BY_ID,
          payload: data,
        })
      })
  }
}
