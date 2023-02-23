import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CustContext } from "../../context/cust-context/cust-context.component";
import AdminCustomers from "../admin-customers/admin-customers.component";
import { Heading1, Heading2 } from "./admin-customers-main.styles";

const AdministratorCustomers = () => {
  const { custInfo } = useContext(CustContext);
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
      <Heading2>Customer Carts</Heading2>
      {custInfo.map((customer, index) => (
        <AdminCustomers id={customer.id} customer={customer} index={index} />
      ))}
    </div>
  );
};

export default AdministratorCustomers;
