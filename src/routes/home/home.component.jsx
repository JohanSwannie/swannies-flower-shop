import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  BusinessName,
  NavLinks,
  NavLink,
} from "./home.styles";

import ShoppingImage from "../../images/Shopping-image.jpg";

const Home = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <BusinessName>
          Swannie's Flower Store - A few clicks is all it takes!
        </BusinessName>
        <NavLinks>
          <NavLink to="/auth1">SIGN IN</NavLink>
        </NavLinks>
      </NavigationContainer>
      <img
        src={ShoppingImage}
        style={{ width: "100%", maxHeight: "80vh", mixBlendMode: "multiply" }}
        alt="companyLogo"
      />
      <Outlet />
    </Fragment>
  );
};

export default Home;
