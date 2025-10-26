import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App.jsx";

describe("App Component", () => {
  test("renderiza el encabezado correctamente", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
