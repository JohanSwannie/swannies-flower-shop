import React from "react";
import { render } from "@testing-library/react";
import FetchApi from "./fetchapi";

//Negative Testing

it("Fetch API and determine outcome", async () => {
  const { getByTestId } = render(<FetchApi />);
  expect(getByTestId("busyLoading")).toHaveTextContent("Loading the items...");
});

//Positive Testing

it("Fetch API and determine outcome", async () => {
  const { getByTestId } = render(<FetchApi />);
  expect(getByTestId("successful")).toHaveTextContent("successful");
});
