import { products } from "../assets/products/products.json";
import { SEARCH_PRODUCTS } from "./actionTypes";

const initialState = {
  allProducts: products,
  productsToDisplay: [],
};

export default (state = initialState, { type, payload }) => {
  const stateCopy = structuredClone(state);
  switch (type) {
    case SEARCH_PRODUCTS: {
      return {
        ...stateCopy,
        productsToDisplay: stateCopy.allProducts.filter((product) =>
          product.name?.toLowerCase().includes(payload?.toLowerCase())
        ),
      };
    }

    default:
      return state;
  }
};
