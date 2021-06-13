import React, { useState } from "react";
import { Adddiv } from "../styles";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import { useHistory } from "react-router-dom";
const AddProduct = () => {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
    console.log(product);
    history.push("/products");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Adddiv>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Add Cookie name"
        />
        <input
          name="price"
          onChange={handleChange}
          type="number"
          placeholder="Add Cookie price"
        />
        <input
          name="description"
          onChange={handleChange}
          type="text"
          placeholder="Add Cookie description"
        />
        <input
          name="image"
          onChange={handleChange}
          type="text"
          placeholder="Add Cookie image"
        />
        <button onChange={handleChange} type="submit">
          Submit
        </button>
      </Adddiv>
    </form>
  );
};
export default AddProduct;
