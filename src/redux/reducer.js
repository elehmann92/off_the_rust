import { products } from "../assets/products/products.json";
import { SEARCH_PRODUCTS, SET_CATEGORY_FILTER } from "./actionTypes";

const categories = [];
products.forEach((product) =>
  product.categories.forEach((category) => {
    !categories.includes(category) && categories.push(category);
  })
);

const initialState = {
  allProducts: products.filter((product) => product.status !== "Vendido"),
  productsToDisplay: [],
  categories: categories.sort(),
  categoryFilter: "",
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
    case SET_CATEGORY_FILTER: {
      return {
        ...stateCopy,
        categoryFilter: payload,
        productsToDisplay:
          payload === ""
            ? stateCopy.allProducts
            : stateCopy.allProducts.filter((product) =>
                product.categories.includes(payload)
              ),
      };
    }
    default:
      return state;
  }
};
