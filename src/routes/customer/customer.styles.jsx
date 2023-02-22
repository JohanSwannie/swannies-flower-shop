import styled from "styled-components";

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  margin: 0 1.5rem;
`;

export const Button = styled.button`
  float: right;
  width: 8%;
  height: 7%;
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;
