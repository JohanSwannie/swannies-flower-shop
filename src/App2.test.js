import ReactDOM from "react-dom";
import App from "./App2";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
