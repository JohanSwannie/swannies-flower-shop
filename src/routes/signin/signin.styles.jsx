import styled from "styled-components";

export const SignInContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 40vw;
  margin-left: 30%;
  border: 1px solid lightgray;
  padding: 3rem;
  background-color: rgba(220, 220, 220, 0.6);
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  h3 {
    display: none;
    text-align: center;
    color: crimson;
    margin-top: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
