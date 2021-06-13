export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const deleteProduct = (productId) => {
  console.log(productId, "action");
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId: productId,
    },
  };
};
export const addProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      newProduct: newProduct,
    },
  };
};
