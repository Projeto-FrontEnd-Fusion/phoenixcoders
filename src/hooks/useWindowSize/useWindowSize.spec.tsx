import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import useWindowSize from ".";

// Componente de exemplo para testar o hook
function TestComponent() {
  const windowSize = useWindowSize();
  return (
    <div>
      <span data-testid="width">{windowSize.width}</span>
      <span data-testid="height">{windowSize.height}</span>
    </div>
  );
}

// Simulando a API do window para Jest
beforeAll(() => {
  global.innerWidth = 1024;
  global.innerHeight = 768;
});

describe("useWindowSize hook", () => {
  it("should return the initial window size", () => {
    render(<TestComponent />);

    const width = screen.getByTestId("width");
    const height = screen.getByTestId("height");

    expect(width.textContent?.trim()).toBe("1024");
    expect(height.textContent?.trim()).toBe("768");
  });

  it("should update the window size on resize", async () => {
    render(<TestComponent />);

    const width = screen.getByTestId("width");
    const height = screen.getByTestId("height");

    global.innerWidth = 800;
    global.innerHeight = 600;

    fireEvent(window, new Event("resize"));

    await waitFor(() => {
      expect(width.textContent?.trim()).toBe("800");
      expect(height.textContent?.trim()).toBe("600");
    });
  });
});
