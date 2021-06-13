// Components
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
// Styling
import { ProductWrapper, UpdateButtonStyled, UnderDiv } from "../styles";

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <UnderDiv>
        <DeleteButton productId={product.id} />
        <Link to={`/products/${product.slug}/edit`}>
          <UpdateButtonStyled />
        </Link>
      </UnderDiv>
    </ProductWrapper>
  );
};

export default ProductItem;
