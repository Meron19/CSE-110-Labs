// import { render, screen, fireEvent } from "@testing-library/react";
// import { StickyNotes } from "./stickyNotes";

// describe("Create StickyNote", () => {
//  test("renders create note form", () => {
//    render(<StickyNotes />);
//    const createNoteButton = screen.getByText("Create Note");
//    expect(createNoteButton).toBeInTheDocument();
//  });

//  test("creates a new note", () => {
//    render(<StickyNotes />);

// // Please make sure your sticky note has a title and content input field with the following placeholders.
//    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
//    const createNoteContentTextarea =
//      screen.getByPlaceholderText("Note Content");
//    const createNoteButton = screen.getByText("Create Note");

//    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
//    fireEvent.change(createNoteContentTextarea, {
//      target: { value: "Note content" },
//    });
//    fireEvent.click(createNoteButton);

//    const newNoteTitle = screen.getByText("New Note");
//    const newNoteContent = screen.getByText("Note content");

//    expect(newNoteTitle).toBeInTheDocument();
//    expect(newNoteContent).toBeInTheDocument();
//  });
// });

// describe("Update Sticky Notes", () => {
//     test("renders create note form", () => {
//       render(<StickyNotes />);
   
//       const createNoteButton = screen.getByText("Create Note");
//       expect(createNoteButton).toBeInTheDocument();
//     });
   
//     describe("Update Sticky Notes", () => {
//       test("Update sticky note dummy 1", () => {
//         render(<StickyNotes />);
    
//         const note1Title = screen.getByTestId("note-title-1");
//         const note1Content = screen.getByTestId("note-content-1");
    
//         fireEvent.input(note1Title, { target: { innerHTML: "Updated Title" } });
//         fireEvent.input(note1Content, { target: { innerHTML: "Updated Content" } });
    
//         expect(note1Title).toHaveTextContent("Updated Title");
//         expect(note1Content).toHaveTextContent("Updated Content");
//       });
//     });
//    });
   
//    describe("Delete Sticky Notes", () => {
//     test("deletes sticky note", () => {
//       render(<StickyNotes />);

//       const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
//       const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
//       const createNoteButton = screen.getByText("Create Note");

//       fireEvent.change(createNoteTitleInput, { target: { value: "Delete" } });
//       fireEvent.change(createNoteContentTextarea, { target: { value: "Stuf to Delete" } });
//       fireEvent.click(createNoteButton);

//       const noteTitle = screen.getByTestId("note-title-1");
//       const noteContent = screen.getByTestId("note-content-1");
//       expect(noteTitle).toBeInTheDocument();
//       expect(noteContent).toBeInTheDocument();

//       const deleteButton = screen.getAllByText("X")[0];
//       fireEvent.click(deleteButton);

//       expect(noteTitle).not.toBeInTheDocument();
//       expect(noteContent).not.toBeInTheDocument();
//     });
//   });

//   describe("Read Sticky Notes", () => {

//     test("Read sticky note dummy 1", () => {
//       render(<StickyNotes />);

//       const note1Title = screen.getByTestId("note-title-1");
//       const note1Content = screen.getByTestId("note-content-1");

//       expect(note1Title).toBeInTheDocument();   
//       expect(note1Content).toBeInTheDocument();
//     });
    
//     test("Read sticky note dummy 2", () => {
//       render(<StickyNotes />);

//       const note2Title = screen.getByTestId("note-title-2");
//       const note2Content = screen.getByTestId("note-content-2");

//       expect(note2Title).toBeInTheDocument();   
//       expect(note2Content).toBeInTheDocument();
//     });

//     test("Read sticky note dummy 3", () => {
//       render(<StickyNotes />);

//       const note3Title = screen.getByTestId("note-title-3");
//       const note3Content = screen.getByTestId("note-content-3");

//       expect(note3Title).toBeInTheDocument();   
//       expect(note3Content).toBeInTheDocument();
//     });

//     test("Read sticky note dummy 4", () => {
//       render(<StickyNotes />);

//       const note4Title = screen.getByTestId("note-title-4");
//       const note4Content = screen.getByTestId("note-content-4");

//       expect(note4Title).toBeInTheDocument();   
//       expect(note4Content).toBeInTheDocument();
//     });

//     test("Read sticky note dummy 5", () => {
//       render(<StickyNotes />);

//       const note5Title = screen.getByTestId("note-title-5");
//       const note5Content = screen.getByTestId("note-content-5");

//       expect(note5Title).toBeInTheDocument();   
//       expect(note5Content).toBeInTheDocument();
//     });

//      test("Read sticky note dummy 6", () => {
//          render(<StickyNotes />);
 
//          const note6Title = screen.getByTestId("note-title-6");
//          const note6Content = screen.getByTestId("note-content-6");
   
//          expect(note6Title).toBeInTheDocument();   
//          expect(note6Content).toBeInTheDocument();
//      });  
// });