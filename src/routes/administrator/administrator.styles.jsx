import styled from "styled-components";

export const MainHeading = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SubHeading = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 35vw;
  grid-gap: 1rem;

  button {
    background-color: lightblue;
    width: 15vw;
    height: 7vh;
  }

  #button1:hover {
    background-color: crimson;
    color: #fff;
    font-weight: bold;
  }
  #button2:hover {
    background-color: crimson;
    color: #fff;
    font-weight: bold;
  }
`;
