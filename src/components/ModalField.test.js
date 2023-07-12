import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalField from "./ModalField";

describe("ModalField", () => {
  test("renders input field with provided props", () => {
    const valueField = "Test value";
    const setValueField = jest.fn();
    const placeholderValue = "Test placeholder";
    const idValue = "test-id";
    const typeValue = "text";
    const classIconValue = "test-icon";

    render(
      <ModalField
        valueField={valueField}
        setValueField={setValueField}
        placeholderValue={placeholderValue}
        idValue={idValue}
        typeValue={typeValue}
        classIconValue={classIconValue}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderValue);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(valueField);
    expect(inputElement.id).toBe(idValue);
    expect(inputElement.type).toBe(typeValue);

    const iconElement = screen.getByTestId("test-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass(classIconValue);

    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(setValueField).toHaveBeenCalledTimes(1);
    expect(setValueField).toHaveBeenCalledWith("New value");
  });
});
