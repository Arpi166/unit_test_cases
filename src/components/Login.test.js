import Login, { validateEmail } from "./Login";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Test the Login Component", () => {
  test("render the login form submit button on the screen", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("should be failed on email validation ", () => {
    const testEmail = "arpi.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  test("email input field should accept email ", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Email");
    userEvent.type(email, "arpi");
    expect(email.value).not.toMatch("arpi.jain@gmail.com");
  });

  test("passport input should have type password ", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("should display alert if error", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const buttonList = screen.getAllByRole("button");

    userEvent.type(email, "arpi");
    userEvent.type(password, "123456");
    userEvent.click(buttonList[0]);
    const error = screen.getByText("Email is not valid");
    expect(error).toBeInTheDocument();
  });

  test("should be able to reset the form ", () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    const resetBtn = getByTestId("reset");
    const emailInputNode = getByPlaceholderText("Email");
    const passwordInputNode = getByPlaceholderText("Password");
    fireEvent.click(resetBtn);
    expect(emailInputNode.value).toMatch("");
    expect(passwordInputNode.value).toMatch("");
  });

  test("should be able to submit the form", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const btnList = screen.getAllByRole("button");

    userEvent.type(email, "arpi@gmail.com");
    userEvent.type(password, "123456");
    userEvent.click(btnList[0]);

    const user = screen.getByText("arpi@gmail.com");
    expect(user).toBeInTheDocument();
  });
});