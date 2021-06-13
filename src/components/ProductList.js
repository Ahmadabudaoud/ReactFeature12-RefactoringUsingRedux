// Styling
import { ListWrapper } from "../styles";

// Components

import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductList = () => {
  const products = useSelector((state) => state.products);

  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <Link to="/AddProduct">
        <button>Add Product</button>
      </Link>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
