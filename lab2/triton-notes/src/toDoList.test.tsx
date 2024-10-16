import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";


describe("Read ToDoList", () => {
    test("renders ToDoList items", () => {
        render(<ToDoList />);

        const toDo1 = screen.getByText("Apples");
        const toDo2 = screen.getByText("Bananas");
    
        expect(toDo1).toBeInTheDocument();
        expect(toDo2).toBeInTheDocument();
      });
    
      test("renders checkboxes for ToDoList items", () => {
        render(<ToDoList />);
    
        // Instead of getByRole, use getByLabelText to find the checkbox by the visible label
        const toDo1Checkbox = screen.getByLabelText("Apples");
        const toDo2Checkbox = screen.getByLabelText("Bananas");
    
        expect(toDo1Checkbox).toBeInTheDocument();
        expect(toDo2Checkbox).toBeInTheDocument();
      });
    
    //   test("updates remaining items count when checkbox is clicked", () => {
    //     render(<ToDoList />);
    
    //     // Again, use getByLabelText to find the checkboxes
    //     const toDo1Checkbox = screen.getByLabelText("Apples");
    
    //     // Verify initial count is 0
    //     const itemsBoughtText = screen.getByText("Items bought: 0");
    
    //     // Click the checkbox
    //     fireEvent.click(toDo1Checkbox);
    
    //     // Verify that the items bought count is updated to 1
    //     expect(screen.getByText("Items bought: 1")).toBeInTheDocument();
    //   });
    });