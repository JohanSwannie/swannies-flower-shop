import styled from "styled-components";

export const AdminProductsContainer = styled.div`
  min-width: 80%;
  width: auto;
  height: 2.5rem;
  margin: 0 10%;

  li {
    list-style: none;
  }

  .prodtext {
    border: 1px solid #000;
    padding: 0.1rem;
    margin-right: 0.3rem;
    background-color: orange;
  }

  .prodvalue {
    margin-right: 0.3rem;
    color: #fff;
    font-weight: bold;
    background-color: darkgreen;
  }

  span {
    font-size: 12px;
    font-weight: bold;
  }

  input {
    font-size: 12px;
    font-weight: bold;
  }

  button {
    font-size: 12px;
    width: 7%;
    opacity: 0.7;
    padding: 0.4rem;
    margin-right: 1rem;
  }

  #deleteButton {
    color: #fff;
    background-color: rgba(255, 0, 0, 0.7);
    font-weight: bold;
  }

  #deleteButton:hover {
    background-color: crimson;
    color: #fff;
    font-weight: bold;
    opacity: 0.85;
  }

  #updateButton {
    color: #fff;
    background-color: rgba(0, 0, 255, 0.7);
    font-weight: bold;
  }

  #updateButton:hover {
    color: #fff;
    background-color: navy;
    font-weight: bold;
    opacity: 0.85;
  }
`;
