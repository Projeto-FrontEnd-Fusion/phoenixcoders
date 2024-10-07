import { usePathname } from "next/navigation";

import { render, screen } from "@testing-library/react";

import { NavConditional } from ".";
import useWindowSize from "../../../hooks/useWindowSize";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn()
}));

jest.mock("../../../hooks/useWindowSize", () => ({
  __esModule: true,
  default: jest.fn()
}));

describe("Componente NavConditional", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render button when pathname is '/' and width is greater than 767", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });

    render(<NavConditional />);

    const button = screen.getByRole("button", { name: /faça parte/i });
    expect(button).toBeInTheDocument();
  });

  it("should not render the button when the width is less than or equal to 767", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    (useWindowSize as jest.Mock).mockReturnValue({ width: 767 });

    render(<NavConditional />);

    const button = screen.queryByRole("button", { name: /faça parte/i });
    expect(button).not.toBeInTheDocument();
  });

  it("should render close icon when pathname is '/register'", () => {
    (usePathname as jest.Mock).mockReturnValue("/register");
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });

    render(<NavConditional />);

    const closeIcon = screen.getByRole("link");
    expect(closeIcon).toBeInTheDocument();
  });
});
