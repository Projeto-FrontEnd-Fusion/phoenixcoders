import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Button } from "./index";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));
describe("Button component", () => {
  it("renders the button with the correct text", () => {
    render(<Button href="/cadastro" />);
    const button = screen.getByText("Faça parte");

    expect(button).toBeInTheDocument();
  });

  it("applies the primary variant class by default", () => {
    render(<Button href="/cadastro" />);
    const button = screen.getByText("Faça parte");

    expect(button).toHaveClass("bg-blue-1 text-blue-3");
  });

  it("applies the secondary variant class when specified", () => {
    render(<Button href="/cadastro" variant="secondary" />);
    const button = screen.getByText("Faça parte");

    expect(button).toHaveClass("text-neutral-1 border border-neutral-1");
  });
  it("applies the size variant class by default", () => {
    render(<Button href="/cadastro" />);
    const button = screen.getByText("Faça parte");

    expect(button).toHaveClass("w-60");
  });
  it("applies the size variant class by full", () => {
    render(<Button href="/cadastro" size="full" />);
    const button = screen.getByText("Faça parte");

    expect(button).toHaveClass("w-96");
  });
  it("navigates to the correct URL on click", () => {
    render(<Button href="/cadastro" />);
    const button = screen.getByRole("link", { name: /faça parte/i });
    expect(button).toHaveAttribute("href", "/cadastro");
  });
});
