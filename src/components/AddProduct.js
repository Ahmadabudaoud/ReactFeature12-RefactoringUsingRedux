import React, { useState } from "react";
import { Adddiv } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";
const AddProduct = () => {
  const productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);
  const updatedProduct = products.find((b) => b.slug === productSlug);
  const [product, setProduct] = useState(
    updatedProduct
      ? updatedProduct
      : {
          name: "",
          price: "",
          description: "",
          image: "",
        }
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedProduct) dispatch(updateProduct(product));
    else dispatch(addProduct(product));
    history.push("/products");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Adddiv>
        <input
          value={product.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Add Cookie name"
        />
        <input
          value={product.price}
          name="price"
          onChange={handleChange}
          type="number"
          placeholder="Add Cookie price"
        />
        <input
          value={product.description}
          name="description"
          onChange={handleChange}
          type="text"
          placeholder="Add Cookie description"
        />
        <input
          value={product.image}
          name="image"
          onChange={handleChange}
          type="text"
          placeholder="Add Cookie image"
        />
        <button type="submit">{updatedProduct ? "Edit" : "Add"}</button>
      </Adddiv>
    </form>
  );
};
export default AddProduct;
