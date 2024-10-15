import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
});

describe("Update Sticky Notes", () => {
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });
   
    test("Update sticky note dummy 1", () => {
      render(<StickyNotes />);
   
      const note1 = screen.getByText("test note 1 title");
      const note1content =
        screen.getByText("test note 1 content");
   
      fireEvent.blur(note1, { target: { textContent: "Update Note" } });
      fireEvent.blur(note1content, {
        target: { textContent: "Update content" },
      });
   
      const updatedNote1 = screen.getByText("Update Note");
      const updatedNote1Content = screen.getByText("Update content");
   
      expect(updatedNote1).toBeInTheDocument();
      expect(updatedNote1Content).toBeInTheDocument();
    });

    describe("Delete Sticky Notes", () => {

    });
   });
   
describe("Delete Sticky Notes", () => {
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });

    const note1 = screen.getByText("test note 1 title");
    const note1content =
      screen.getByText("test note 1 content");

    const deleteButton = screen.getAllByText("X")[0]
    fireEvent.click(deleteButton)

    expect(note1).not.toBeInTheDocument();
    expect(note1content).not.toBeInTheDocument();
});
