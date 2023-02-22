import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/products-context/products-context.component";
import { Preview, Button } from "./customer.styles";
import CustProducts from "../../components/cust-products/cust-products.component";

const Customer = () => {
  const navigate = useNavigate();

  const { products } = useContext(ProductsContext);

  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        A Range of Flower Products to choose from
        <Button onClick={checkout}>Checkout</Button>
      </h2>

      <Preview>
        {products.map((product) => (
          <CustProducts key={product.id} product={product} />
        ))}
      </Preview>
    </div>
  );
};

export default Customer;
