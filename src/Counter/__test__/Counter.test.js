import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Header renders correctly", () => {
  render(<Counter />);
  const headerEl = screen.getByTestId("header");
  expect(headerEl.textContent).toBe("My Counter");
});

test("counter intially starts with 0", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input initially renders with value 1", () => {
  render(<Counter />);
  const inputEl = screen.getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("Add button renders with +", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("Subtract button renders with -", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn");
  expect(subtractBtn.textContent).toBe("-");
});

test("input value changes successfully", () => {
  render(<Counter />);
  const inputEl = screen.getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("add btn adds counter successfully", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn");
  const counterEl = screen.getByTestId("counter");

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("1");
});

test("subtract btn subtracts counter successfully", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn");
  const counterEl = screen.getByTestId("counter");

  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("-1");
});

test("add subtracts multiple times leads to correct counter", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn");
  const addBtn = screen.getByTestId("add-btn");
  const counterEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("30");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("20");
});

test("Counter color changes accordingly", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn");
  const addBtn = screen.getByTestId("add-btn");
  const counterEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addBtn);

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);

  expect(counterEl.className).toBe("green");

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.className).toBe("");

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.className).toBe("red");
});
