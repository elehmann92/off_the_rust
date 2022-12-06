import { GET_SINGLE_PRODUCT, SEARCH_PRODUCTS, SET_CATEGORY_FILTER } from "./actionTypes";

export const searchProducts = (string) => ({
  type: SEARCH_PRODUCTS,
  payload: string,
});

export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});

export const getSingleProduct = (id) => ({
    type: GET_SINGLE_PRODUCT,
    payload: id,
})
