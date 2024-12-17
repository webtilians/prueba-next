import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import '@testing-library/jest-dom/extend-expect';

describe("Button Component", () => {
  it("renders the button with correct text", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
