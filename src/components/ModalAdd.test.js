import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "bootstrap/dist/js/bootstrap.bundle";

import ModalAdd from "./ModalAdd";
import ButtonAdd from "./ButtonAdd";

describe("ModalAdd", () => {
  test("renders modal with provided props", async () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;
    const checkData = jest.fn();
    const openModal = jest.fn();

    render(
      <>
        <ButtonAdd openModal={openModal}></ButtonAdd>
        <ModalAdd title={title} children={children} checkData={checkData} />
      </>
    );

    const addButton = screen.getByTestId("btn-add");
    fireEvent.click(addButton);

    const modalElement = await screen.findByTestId("modal-dialog");
    expect(modalElement).toBeInTheDocument();
    await waitFor(() => expect(modalElement).toHaveClass("modal fade show"));

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const closeButton = screen.getByTestId("btn-close", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    const saveButton = screen.getByTestId("btn-save", { name: /save/i });
    expect(saveButton).toBeInTheDocument();

    fireEvent.click(saveButton);
    expect(checkData).toHaveBeenCalledTimes(1);

    fireEvent.click(closeButton);
    await waitFor(() => expect(modalElement).toHaveClass("modal fade"));
  });
});
