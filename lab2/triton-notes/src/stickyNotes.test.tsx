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
});

describe("Delete Sticky Notes", () => {
   
        test("Delete sticky note dummy 1", () => {
          render(<StickyNotes />);
   
          const note1 = screen.getByText("test note 1 title");
          const note1content = screen.getByText("test note 1 content");

          const deleteButton = screen.getAllByText("X")[0];
    
          fireEvent.click(deleteButton);

          expect(note1).not.toBeInTheDocument();
   
          expect(note1content).not.toBeInTheDocument();
        });
});

describe("Read Sticky Notes", () => {

        test("Read sticky note dummy 1", () => {
          render(<StickyNotes />);
    
          const note1 = screen.getByText("test note 1 title");
          const note1content = screen.getByText("test note 1 content");
    
          expect(note1).toBeInTheDocument();   
          expect(note1content).toBeInTheDocument();
        });
        
        test("Read sticky note dummy 2", () => {
          render(<StickyNotes />);
    
          const note2 = screen.getByText("test note 2 title");
          const note2content = screen.getByText("test note 2 content");
    
          expect(note2).toBeInTheDocument();
          expect(note2content).toBeInTheDocument();
        });
 
        test("Read sticky note dummy 3", () => {
          render(<StickyNotes />);
    
          const note3 = screen.getByText("test note 3 title");
          const note3content = screen.getByText("test note 3 content");
    
          expect(note3).toBeInTheDocument();
          expect(note3content).toBeInTheDocument();
        });
 
        test("Read sticky note dummy 4", () => {
          render(<StickyNotes />);
    
          const note4 = screen.getByText("test note 4 title");
          const note4content = screen.getByText("test note 4 content");
    
          expect(note4).toBeInTheDocument();
          expect(note4content).toBeInTheDocument();
        });
 
        test("Read sticky note dummy 5", () => {
          render(<StickyNotes />);
    
          const note5 = screen.getByText("test note 5 title");
          const note5content = screen.getByText("test note 5 content");
    
          expect(note5).toBeInTheDocument();
          expect(note5content).toBeInTheDocument();
        });
 
         test("Read sticky note dummy 6", () => {
             render(<StickyNotes />);
     
             const note6 = screen.getByText("test note 6 title");
             const note6content = screen.getByText("test note 6 content");
     
             expect(note6).toBeInTheDocument();
             expect(note6content).toBeInTheDocument();
         });  
});

describe("delete ALL sticky notes", () => {
  test("Delete sticky note dummy 3,4,5,6", () => {
    render(<StickyNotes />);

    const note1 = screen.getByText("test note 1 title");
    const note1content = screen.getByText("test note 1 content");

    const note2 = screen.getByText("test note 2 title");
    const note2content = screen.getByText("test note 2 content");

    const note3 = screen.getByText("test note 3 title");
    const note3content = screen.getByText("test note 3 content");

    const note4 = screen.getByText("test note 4 title");
    const note4content = screen.getByText("test note 4 content");

    const note5 = screen.getByText("test note 5 title");
    const note5content = screen.getByText("test note 5 content");

    const note6 = screen.getByText("test note 6 title");
    const note6content = screen.getByText("test note 6 content");

    const deleteButton1 = screen.getAllByText("X")[0];
    const deleteButton2 = screen.getAllByText("X")[1];
    const deleteButton3 = screen.getAllByText("X")[2];
    const deleteButton4 = screen.getAllByText("X")[3];
    const deleteButton5 = screen.getAllByText("X")[4];
    const deleteButton6 = screen.getAllByText("X")[5];

    fireEvent.click(deleteButton1);
    fireEvent.click(deleteButton2);
    fireEvent.click(deleteButton3);
    fireEvent.click(deleteButton4);
    fireEvent.click(deleteButton5);
    fireEvent.click(deleteButton6);

    expect(note1).not.toBeInTheDocument();
    expect(note1content).not.toBeInTheDocument();

    expect(note2).not.toBeInTheDocument();
    expect(note2content).not.toBeInTheDocument();

    expect(note3).not.toBeInTheDocument();
    expect(note3content).not.toBeInTheDocument();

    expect(note4).not.toBeInTheDocument();
    expect(note4content).not.toBeInTheDocument();

    expect(note5).not.toBeInTheDocument();
    expect(note5content).not.toBeInTheDocument();

    expect(note6).not.toBeInTheDocument();
    expect(note6content).not.toBeInTheDocument();
  });
});