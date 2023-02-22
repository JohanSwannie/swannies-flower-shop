import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(236, 225, 205, 0.5);
`;

export const BusinessName = styled.div`
  font-family: "Stint Ultra Condensed", cursive;
  font-size: 40px;
  font-weight: lighter;
  padding: 10px 15px;
  opacity: 0.9;
  margin-top: 2.2rem;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  font-family: "Stint Ultra Condensed", cursive;
  font-size: 30px;
  font-weight: bolder;
  letter-spacing: 0.05rem;
  word-spacing: 0.2rem;
  color: #000;
  opacity: 0.8;
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-size: 33px;
    text-shadow: 0.5px 0.5px #000;
    font-weight: bold;
  }
`;
