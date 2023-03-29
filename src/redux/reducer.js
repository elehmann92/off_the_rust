import unidecode from "unidecode";
import { products } from "../assets/products/products.json";
import {
  GET_SINGLE_PRODUCT,
  SEARCH_PRODUCTS,
  SET_CATEGORY_FILTER,
  SET_SHOW_SOLD,
} from "./actionTypes";

const categories = [];
products.forEach((product) =>
  // filter categories of sold items
  // product.status !== 'Vendido' &&
  product.categories.forEach((category) => {
    !categories.includes(category) && categories.push(category);
  })
);

// CREAR UNA FUNCIÓN QUE SEA APPLY FILTERS, QUE APLIQUE EL FILTRO QUE HAYA EN CATEGORIES Y EN SOLD PRODUCTS.
const filterProducts = (products, categoryFilter, showSoldProducts) => {
  let filteredProducts = structuredClone(products)

  if (!showSoldProducts) {
    filteredProducts = filteredProducts.filter((product) => product.status !== "Vendido")
  }

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter((product) => product.categories.includes(categoryFilter))
  }

  return filteredProducts
}

// Shuffle init
products.sort((a, b) => 0.5 - Math.random());

const initialState = {
  allProducts: products,
  // .filter((product) => product.status !== "Vendido" && product.status !== "Pausado")
  totalUploaded: products.reduce((acc, ele) => (acc += ele.price), 0),
  totalAvailable: products
    .filter(
      (product) => product.status !== "Vendido" && product.status !== "Pausado"
    )
    .reduce((acc, ele) => (acc += ele.price), 0),
  totalSold: products
    .filter((product) => product.status === "Vendido")
    .reduce((acc, ele) => (acc += ele.price), 0),
  productsToDisplay: [],
  singleProduct: null,
  categories: categories.sort(),
  categoryFilter: "",
  showSoldProducts: true,
};

export default (state = initialState, { type, payload }) => {
  const stateCopy = structuredClone(state);
  switch (type) {
    case SEARCH_PRODUCTS: {
      const unidecoded = unidecode(payload);
      return {
        ...stateCopy,
        productsToDisplay: stateCopy.allProducts.filter((product) =>
          unidecode(product.name)
            ?.toLowerCase()
            .includes(unidecoded.toLowerCase())
        ),
      };
    }
    case SET_CATEGORY_FILTER: {
      const filteredProducts = stateCopy.allProducts.filter((product) =>
        product.categories.includes(payload)
      );

      const productsToDisplay = stateCopy.showSoldProducts
        ? filteredProducts
        : filteredProducts.filter((product) => product.status !== "Vendido");

      return {
        ...stateCopy,
        categoryFilter: payload,
        productsToDisplay: filterProducts(stateCopy.allProducts, payload, stateCopy.showSoldProducts)
      };
    }
    case GET_SINGLE_PRODUCT: {
      return {
        ...stateCopy,
        singleProduct:
          stateCopy.allProducts.find(
            (product) => product.id === parseInt(payload)
          ) || null,
      };
    }

    case SET_SHOW_SOLD: {
      return {
        ...stateCopy,
        showSoldProducts: payload,
        productsToDisplay: filterProducts(stateCopy.allProducts, stateCopy.categoryFilter, payload)
      };
    }

    default:
      return state;
  }
};
