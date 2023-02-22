import { useNavigate } from "react-router-dom";
import { MainHeading, SubHeading, Buttons } from "./administrator.styles";

const Administrator = () => {
  const navigate = useNavigate();

  const adminProducts = () => {
    navigate("/adminprod");
  };

  const adminCustomers = () => {
    navigate("/admincust");
  };

  return (
    <div>
      <MainHeading>Administrator</MainHeading>
      <SubHeading>Administrator Choices</SubHeading>
      <Buttons>
        <button id="button1" onClick={adminProducts}>
          View / Edit Products
        </button>
        <button id="button2" onClick={adminCustomers}>
          View Customers / Carts
        </button>
      </Buttons>
    </div>
  );
};

export default Administrator;
