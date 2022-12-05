import { SEARCH_PRODUCTS } from "./actionTypes";

export const searchProducts = (string) => ({
    type: SEARCH_PRODUCTS,
    payload: string
})