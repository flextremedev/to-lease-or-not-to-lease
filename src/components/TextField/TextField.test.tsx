import React from "react";
import { TextField } from "./TextField";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { fireEvent } from "@testing-library/react";

describe("TextField", () => {
  it("should render label when provided", () => {
    const labelText = "Test input";
    const { getByLabelText } = renderWithTheme(
      <TextField id="test-input" label={labelText} />
    );
    expect(getByLabelText(labelText)).toBeTruthy();
  });
  it("should warn if label is provided but id isn't", () => {
    console.warn = jest.fn();
    const labelText = "Test input";
    renderWithTheme(<TextField label={labelText} />);
    expect(console.warn).toHaveBeenCalled();
  });
  it("should display provided placeholder", () => {
    const placeholder = "Enter text";
    const { getByPlaceholderText } = renderWithTheme(
      <TextField id="test-input" placeholder={placeholder} />
    );
    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });
  it("should display provided value", () => {
    const value = "Hello";
    const { getByDisplayValue } = renderWithTheme(
      <TextField id="test-input" value={value} readOnly />
    );
    expect(getByDisplayValue(value)).toBeTruthy();
  });
  it("should trigger onChange when value has changed", () => {
    const handleChange = jest.fn();
    const value = "Hello";
    const { getByDisplayValue } = renderWithTheme(
      <TextField id="test-input" value={value} onChange={handleChange} />
    );
    const input = getByDisplayValue(value);
    fireEvent.change(input, { target: { value: "Hello!" } });
    expect(handleChange).toHaveBeenCalled();
  });
  it("should render with provided id", () => {
    const labelText = "Test input";
    const id = "test-input";
    const { getByLabelText } = renderWithTheme(
      <TextField id="test-input" label={labelText} />
    );
    expect(getByLabelText(labelText).id).toBe(id);
  });
  it("should render as readOnly", () => {
    const labelText = "Test input";
    const id = "test-input";
    const { getByLabelText } = renderWithTheme(
      <TextField id={id} label={labelText} readOnly />
    );
    const input = getByLabelText(labelText);
    expect((input as HTMLInputElement).readOnly).toBe(true);
  });
});
