import { useContext } from "react";
import { AdminProductsContainer } from "./admin-products.styles";
import { ProductsContext } from "../../context/products-context/products-context.component";

const AdminProducts = ({ product }) => {
  const { sku, name, description, price } = product;
  const { removeProduct } = useContext(ProductsContext);
  const removeTheProduct = () => removeProduct(product);

  return (
    <AdminProductsContainer>
      <ul>
        <li key={product.id}>
          <button id="deleteButton" onClick={removeTheProduct}>
            Delete
          </button>
          <button id="updateButton">Update</button>
          <span className="prodtext"> SKU: </span>{" "}
          <span className="prodvalue">{sku}</span>
          <span className="prodtext"> Name: </span>
          <span className="prodvalue">{name}</span>
          <span className="prodtext"> Description: </span>
          <span className="prodvalue">{description}</span>
          <span className="prodtext"> Price: </span>
          <span className="prodvalue">{price.toFixed(2)}</span>
        </li>
      </ul>
    </AdminProductsContainer>
  );
};

export default AdminProducts;
