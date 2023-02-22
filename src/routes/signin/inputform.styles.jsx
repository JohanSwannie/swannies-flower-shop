import styled, { css } from "styled-components";

const subColor = "navy";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
  input[type="reset"],
  input[type="submit"],
  input[type="button"] {
    height: 50px;
    letter-spacing: 0.5px;
    padding: 0 35px;
    border: 5px solid white;
    border-style: double;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid #000;
    }
  }
`;
