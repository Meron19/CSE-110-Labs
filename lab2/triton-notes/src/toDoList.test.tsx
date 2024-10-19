import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { BrowserRouter } from "react-router-dom";

describe("Read ToDoList", () => {
      test("renders checkboxes for ToDoList items", () => {
        render(
            <BrowserRouter>
              <ToDoList />
            </BrowserRouter>
          );
        //check if they appear
        const toDo1Checkbox = screen.getByText("Apples");
        const toDo2Checkbox = screen.getByText("Bananas");
    
        expect(toDo1Checkbox).toBeInTheDocument();
        expect(toDo2Checkbox).toBeInTheDocument();
      });

      test("number of items checked the same as shown in the title",() =>{
        render(<BrowserRouter><ToDoList /></BrowserRouter>);

          expect(screen.getByText("Items bought: 0")).toBeInTheDocument();
        //get the checkboxes
          const check = screen.getAllByRole("checkbox");

        //test if you can click the unchecked and items increment
          const unchecked = check[0]
          fireEvent.click(unchecked);
          expect(screen.getByText("Items bought: 1")).toBeInTheDocument();
          fireEvent.click(unchecked);
          expect(screen.getByText("Items bought: 2")).toBeInTheDocument();
        
          //test if you can click the checked and items decrement
          const checked = check[1]
          fireEvent.click(checked);
          expect(screen.getByText("Items bought: 1")).toBeInTheDocument();
          fireEvent.click(checked);
          expect(screen.getByText("Items bought: 0")).toBeInTheDocument();
      });
    });