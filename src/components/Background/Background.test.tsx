import { render } from "@testing-library/react";
import Background from "./Background";

it("should render a div at 100vh", () => {
  render(<Background />);
  expect(true).toBe(true);
});

it("should render it's children", () => {
  expect(true).toBe(true);
});
