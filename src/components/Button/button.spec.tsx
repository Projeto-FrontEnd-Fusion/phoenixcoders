import { render, screen } from "@testing-library/react";

import { Button } from "./";

describe("<Button />", () => {
  it("should render a button element by default", () => {
    render(<Button>Faça parte</Button>);
    const buttonElement = screen.getByRole("button", { name: "Faça parte" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the Slot component if 'asChild' is true", () => {
    render(
      <Button asChild>
        <a href="/">Faça parte</a>
      </Button>
    );
    const linkElement = screen.getByRole("link", { name: "Faça parte" });
    expect(linkElement).toBeInTheDocument();
  });

  it("should apply primary variant classes by default", () => {
    render(<Button>Faça parte</Button>);
    const buttonElement = screen.getByRole("button", { name: "Faça parte" });
    expect(buttonElement).toHaveClass("bg-blue-1 text-blue-3");
  });

  it("should apply secondary variant classes", () => {
    render(<Button variant="secondary">Faça parte</Button>);
    const buttonElement = screen.getByRole("button", { name: "Faça parte" });
    expect(buttonElement).toHaveClass("text-neutral-1 border-neutral-1");
  });

  it("should apply full size class when size is 'full'", () => {
    render(<Button size="full">Faça parte</Button>);
    const buttonElement = screen.getByRole("button", { name: "Faça parte" });
    expect(buttonElement).toHaveClass("w-full");
  });

  it("should forward the ref to the button element", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Faça parte</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("should accept and apply custom className", () => {
    render(<Button className="custom-class">Faça parte</Button>);
    const buttonElement = screen.getByRole("button", { name: "Faça parte" });
    expect(buttonElement).toHaveClass("custom-class");
  });
});
