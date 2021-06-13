import products from "../products";
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actions";
import slugify from "slugify";

const initialState = { products: products };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case ADD_PRODUCT:
      action.payload.newProduct.id =
        state.products[state.products.length - 1].id + 1;
      action.payload.newProduct.slug = slugify(action.payload.newProduct.name);
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;

      updatedProduct.slug = slugify(updatedProduct.name);

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    default:
      return state;
  }
};
export default reducer;
