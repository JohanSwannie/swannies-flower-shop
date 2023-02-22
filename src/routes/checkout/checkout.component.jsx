import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerFormContainer, ButtonsContainer } from "./checkout.styles";
import { CustContext } from "../../context/cust-context/cust-context.component";
import { CartContext } from "../../context/cart-context/cart-context.component";
import InputForm from "../signin/input-form.component";

const initialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  cart: "",
};

const Checkout = () => {
  const [custDetails, setCustDetails] = useState(initialDetails);
  const { firstName, lastName, email } = custDetails;
  const { addNewCustomer } = useContext(CustContext);
  const { cartItems } = useContext(CartContext);
  const { deleteCartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const addNextCustomer = () => addNewCustomer(custDetails, cartItems);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustDetails({ ...custDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addNextCustomer();
    document.getElementById("message1").innerHTML =
      "Your information has been successfully captured";
    document.getElementById("message2").innerHTML = "Thank You";
    document.getElementById("message1").style.display = "block";
    document.getElementById("message2").style.display = "block";
    document.getElementById("fname").disabled = true;
    document.getElementById("lname").disabled = true;
    document.getElementById("email").disabled = true;
    setCustDetails(initialDetails);
    deleteCartItems();
  };

  const resetForm = () => {
    setCustDetails(initialDetails);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <CustomerFormContainer>
      <h2>Customer Information</h2>
      <span>Please enter your personal details</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          value={firstName}
          id="fname"
        />

        <InputForm
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          value={lastName}
          id="lname"
        />

        <InputForm
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          id="email"
        />

        <ButtonsContainer>
          <InputForm type="submit" value="SUBMIT" />
          <InputForm type="reset" value="RESET" onClick={resetForm} />
          <InputForm
            type="button"
            value="HOME"
            id="homeButton"
            onClick={goHome}
          />
        </ButtonsContainer>
        <h3 id="message1">Initial</h3>
        <h3 id="message2">Initial</h3>
      </form>
    </CustomerFormContainer>
  );
};

export default Checkout;
