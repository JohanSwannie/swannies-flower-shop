import { useContext, useState } from "react";
import { AdminProductsContainer } from "./admin-products.styles";
import { ProductsContext } from "../../context/products-context/products-context.component";

const initProdFields = {
  prodCode: "",
  prodName: "",
  prodDescr: "",
  prodPrice: "",
};

const AdminProducts = ({ product, index }) => {
  const [productFields, setProductFields] = useState(initProdFields);

  const { prodCode, prodName, prodDescr, prodPrice } = productFields;

  const { sku, name, description, price } = product;

  const { removeProduct } = useContext(ProductsContext);
  const { updateProduct } = useContext(ProductsContext);

  const removeTheProduct = () => {
    removeProduct(product);
  };

  const updateTheProduct = () => {
    alert(sku);
    if (prodCode) {
      product.sku = prodCode;
    }
    if (prodName) {
      product.name = prodName;
    }
    if (prodDescr) {
      product.description = prodDescr;
    }
    if (prodPrice) {
      product.price = prodPrice;
    }
    updateProduct(product);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductFields({ ...productFields, [name]: value });
  };

  return (
    <AdminProductsContainer>
      <ul>
        <li key={product.id}>
          <button id="deleteButton" onClick={removeTheProduct}>
            Delete
          </button>
          <button id="updateButton" onClick={updateTheProduct}>
            Update
          </button>
          <span className="prodtext"> SKU: </span>
          <input
            type="text"
            required
            className="prodvalue"
            onChange={handleChange}
            name="prodCode"
            defaultValue={sku}
          />
          <span className="prodtext"> Name: </span>
          <input
            type="text"
            required
            className="prodvalue"
            onChange={handleChange}
            name="prodName"
            defaultValue={name}
          />
          <span className="prodtext"> Description: </span>
          <input
            type="text"
            required
            className="prodvalue"
            onChange={handleChange}
            name="prodDescr"
            defaultValue={description}
          />
          <span className="prodtext"> Price: </span>
          <input
            type="number"
            required
            className="prodvalue"
            onChange={handleChange}
            name="prodPrice"
            defaultValue={price}
          />
        </li>
      </ul>
    </AdminProductsContainer>
  );
};

export default AdminProducts;
