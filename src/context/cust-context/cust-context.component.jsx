import { createContext, useState } from "react";

const addCustInfo = (custInfo, custToAdd, cartItems) => {
  return [...custInfo, { ...custToAdd, cartItems }];
};

export const CustContext = createContext({
  custInfo: [],
  addNewCustomer: () => {},
});

export const CustProvider = ({ children }) => {
  const [custInfo, setCustInfo] = useState([]);
  const addNewCustomer = (custToAdd, cartItems) => {
    setCustInfo(addCustInfo(custInfo, custToAdd, cartItems));
  };

  const value = {
    custInfo,
    addNewCustomer,
  };

  return <CustContext.Provider value={value}>{children}</CustContext.Provider>;
};
