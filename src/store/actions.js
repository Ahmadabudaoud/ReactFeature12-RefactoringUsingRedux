export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const deleteProduct = (productId) => {
  console.log(productId, "action");
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId: productId,
    },
  };
};
