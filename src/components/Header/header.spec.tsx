import { render, screen } from "@testing-library/react";

import { Header } from ".";

jest.mock("./NavConditional", () => ({
  NavConditional: jest.fn(() => <nav>NavConditional Mock</nav>)
}));

describe("Componente Header", () => {
  it("should render the logo and the NavConditional component", () => {
    render(<Header />);

    const logo = screen.getByAltText("Logo Frontend Fusion");
    expect(logo).toBeInTheDocument();

    const nav = screen.getByText("NavConditional Mock");
    expect(nav).toBeInTheDocument();
  });
});
