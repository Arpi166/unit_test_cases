import { render, screen, act } from "@testing-library/react";
import Clock from './Clock';
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({adapter: new Adapter()})  

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("Exercise 04", () => {
  test("displays the current time on render", () => {
    render(<Clock />);

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();
  });

  test("updates the time every second", () => {
    render(<Clock />);

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();
  });
});