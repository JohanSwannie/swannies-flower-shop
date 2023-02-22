import { CustomerDetailsContainer } from "./admin-customers.styles";

const AdminCustomers = ({ customer, index }) => {
  const { firstName, lastName, email, cartItems } = customer;

  return (
    <CustomerDetailsContainer>
      <h4 style={{ textDecoration: "underline", marginBottom: ".5rem" }}>
        Customer {index + 1}
      </h4>
      <ul>
        <li key={customer.id}>
          First Name : {firstName} Last Name : {lastName} Email : {email}
        </li>
      </ul>
      {cartItems.map((item, index) => (
        <ul>
          <li
            key={item.id}
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              margin: "1rem 0",
            }}
          >
            Cart Item {index + 1}
          </li>
          <li key={item.id}>SKU : {item.sku}</li>
          <li key={item.id}>NAME : {item.name}</li>
          <li key={item.id}>DESCRIPTION : {item.description}</li>
          <li key={item.id}>PRICE : {item.price}</li>
          <li key={item.id}>QUANTITY : {item.quantity}</li>
        </ul>
      ))}
    </CustomerDetailsContainer>
  );
};

export default AdminCustomers;
