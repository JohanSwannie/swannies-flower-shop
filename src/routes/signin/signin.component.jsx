import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignInContainer, ButtonContainer } from "./signin.styles";
import InputForm from "./input-form.component";

const initialFormFields = {
  username: "",
  password: "",
};

const Signin = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { username, password } = formFields;
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://gist.githubusercontent.com/JohanSwannie/18f0e9df4b9c6cf2fa7b228b381dbe38/raw/30361a7eff9c359afd550cebda5f416763db523f/uniqueUsers.json"
      );
      const result = await data.json();
      setUserData(result);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    document.getElementById("err").style.display = "none";
    const adminRecFound = userData.find(
      (user) =>
        username === user.userid &&
        password === user.password &&
        user.permission === "administrator"
    );
    const custRecFound = userData.find(
      (user) =>
        username === user.userid &&
        password === user.password &&
        user.permission === "customer"
    );
    if (adminRecFound) {
      navigate("/admin");
    } else if (custRecFound) {
      navigate("/customer");
    } else {
      document.getElementById("err").innerHTML = "Invalid Sign In Attempt!";
      document.getElementById("err").style.display = "block";
      setFormFields(initialFormFields);
    }
  };

  const resetForm = () => {
    setFormFields(initialFormFields);
    document.getElementById("err").style.display = "none";
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <span>Sign in with your Username and Password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="User Name"
          type="text"
          required
          onChange={handleChange}
          name="username"
          value={username}
        />

        <InputForm
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonContainer>
          <InputForm type="submit" value="SIGN IN" />
          <InputForm type="reset" value="RESET" onClick={resetForm} />
          <InputForm type="button" value="HOME" onClick={goHome} />
        </ButtonContainer>
        <h3 id="err">Initial</h3>
      </form>
    </SignInContainer>
  );
};

export default Signin;
