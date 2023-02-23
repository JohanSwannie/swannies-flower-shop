import { useContext } from "react";
import { ProductCartContainer } from "./cust-products.styles";
import { CartContext } from "../../context/cart-context/cart-context.component";

const CustProducts = ({ product }) => {
  const { sku, name, description, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <ul>
        <li>
          <span>SKU: </span> {sku}
        </li>
        <li>
          <span>Name: </span>
          {name}
        </li>
        <li>
          <span>Description: </span>
          {description}
        </li>
        <li>
          <span>Price: </span>
          {price}
        </li>
      </ul>
      <button onClick={addProductToCart}>Add to cart</button>
    </ProductCartContainer>
  );
};

export default CustProducts;
