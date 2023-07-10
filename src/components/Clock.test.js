import { render, screen, act } from "@testing-library/react";
import Clock from './Clock';
import React from 'react';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("Clock", () => {
  test("renders the current time on render", () => {
    render(<Clock />);

    const timeElement = screen.getByTestId('clock-time');

    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveTextContent(new Date().toString());
  });

  test("updates the time every second", () => {
    render(<Clock />);

    const timeElement = screen.getByTestId('clock-time');
    const initialTime = timeElement.textContent;

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const updatedTime = timeElement.textContent;

    expect(updatedTime).not.toBe(initialTime);
    expect(updatedTime).toContain(new Date().toString());
  });
});