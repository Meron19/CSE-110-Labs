import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { BrowserRouter } from 'react-router-dom';

describe("Read ToDoList", () => {
  test("Read ToDoList", () => {
    render(<ToDoList />);

    const toDo1 = screen.getByText("Apples");
    const toDo2 = screen.getByText("Bananas");

    expect(toDo1).toBeInTheDocument();
    expect(toDo2).toBeInTheDocument();
  });
});

describe("Read ToDoList", () => {
  test("Read ToDoList", () => {
    render(<ToDoList />);

    const toDo1Checkbox = screen.getByRole("checkbox", { name: "Apples" });
    const toDo2Checkbox = screen.getByRole("checkbox", { name: "Bananas" });

    expect(toDo1Checkbox).toBeInTheDocument();
    expect(toDo2Checkbox).toBeInTheDocument();
  });
});

describe("ToDoList total counter", () => {
    test("Should display the correct count of purchased items", () => {
      render(
        <BrowserRouter>
          <ToDoList />
        </BrowserRouter>
      );
  
      
      const title = screen.getByText("Items bought: 0");
      expect(title).toBeInTheDocument();
  

      const toDoCheckbox = screen.getAllByRole("checkbox");
  

      fireEvent.click(toDoCheckbox[0]);
  

      const item1 = screen.getByText("Items bought: 1");
      expect(item1).toBeInTheDocument();
  

      fireEvent.click(toDoCheckbox[0]);
  

      const item2 = screen.getByText("Items bought: 0");
      expect(item2).toBeInTheDocument();
    });
  });
