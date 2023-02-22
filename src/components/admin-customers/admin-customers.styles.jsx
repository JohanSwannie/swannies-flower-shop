import styled from "styled-components";

export const CustomerDetailsContainer = styled.div`
  min-width: 20%;
  width: auto;
  height: 100%;
  border: 3px solid darkgray;
  padding: 0.5rem;
  margin: 0 25% 0.7rem;
  text-align: center;
  &:hover {
    background-color: lightseagreen;
  }

  #cartItem {
    margin: 5rem, 0;
  }

  li {
    list-style: none;
  }
`;
