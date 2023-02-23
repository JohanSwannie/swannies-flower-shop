import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/products-context/products-context.component";
import AdminProducts from "../../components/admin-products/admin-products.component";

import { Heading1, Heading2 } from "./admin-products-main.styles";

const AdministratorProducts = () => {
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();

  const adminHome = () => {
    navigate("/admin");
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div>
      <Heading1>
        <button onClick={adminHome}>Admin Home</button>
        <button onClick={home}>Home</button>
      </Heading1>
      <Heading2>Products</Heading2>
      {products &&
        products.map((product, index) => (
          <AdminProducts key={index} product={product} index={index} />
        ))}
    </div>
  );
};

export default AdministratorProducts;
