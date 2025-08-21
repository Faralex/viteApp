import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Vite text", () => {
  render(<App />);
  expect(screen.getByText(/Vite/i)).toBeInTheDocument();
});
