import React from "react";
import { render } from "@testing-library/react";
import FetchApi from "./fetchapi";

//Negative Testing

test("Fetch API to determine if it failed", async () => {
  const { getByTestId } = render(<FetchApi />);
  expect(getByTestId("busyLoading")).toHaveTextContent("Loading the items...");
});

//Positive Testing

test("Fetch API to determine if it is successful", async () => {
  const { getByTestId } = render(<FetchApi />);
  expect(getByTestId("successful")).toHaveTextContent("successful");
});
