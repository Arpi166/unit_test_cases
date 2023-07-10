import { render, screen, act } from "@testing-library/react";
import Clock from './Clock';

jest.useFakeTimers();

describe("Test cases of clock", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test("displays the current time on render", () => {
    render(<Clock />);
    const timeElement = screen.getByTestId("clock-time");

    expect(timeElement).toHaveTextContent(new Date().toString());
  });

  test("updates the time every second", () => {
    render(<Clock />);
    const timeElement = screen.getByTestId("clock-time");

    expect(timeElement).toHaveTextContent(new Date().toString());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timeElement).toHaveTextContent(new Date().toString());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timeElement).toHaveTextContent(new Date().toString());
  });
});
