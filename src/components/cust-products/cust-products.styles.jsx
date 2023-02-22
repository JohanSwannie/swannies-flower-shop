import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  position: relative;
  border: 1px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
  li {
    list-style: none;
  }

  span {
    font-weight: bold;
  }

  button {
    font-size: 16px;
    width: 35%;
    opacity: 0.7;
    padding: 0.2rem 0;
    margin-top: 3rem;
  }

  &:hover {
    button {
      background-color: rgba(2, 2, 2, 0.9);
      color: #fff;
      font-weight: bold;
      opacity: 0.85;
    }
  }
`;
