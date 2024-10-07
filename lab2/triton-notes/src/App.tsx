import "./App.css";
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { useState, useEffect } from "react"; // Import the useState and useEffect hooks

function App() {
  const [notes, setNotes] = useState<Note[]>(dummyNotesList); // Initialize the notes state with the dummyNotesList
  const [favorites, setFavorites] = useState<string[]>([]); // Initialize the favorites state with an empty array

  useEffect(() => {
    console.log("favorites: ", favorites);
  }, [favorites]);

  const handleLike = (noteId: number) => {
    const newFavorites = favorites.includes(noteId.toString())
      ? favorites.filter((id) => id !== noteId.toString())
      : [...favorites, noteId.toString()];

    setFavorites(newFavorites);
  };

  return (
    <div className="app-container">
      <form className="note-form">
        <div>
          <input placeholder="Note Title"></input>
        </div>

        <div>
          <textarea placeholder="Note Content"></textarea>
        </div>

        <select id="label" name="label">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="other">Other</option>
        </select> 

        <div>
          <button type="submit">Create Note</button>
        </div>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="notes-header">
              <button
                onClick={() => handleLike(note.id)}
              >
                {favorites.includes(note.id.toString()) ? <span>&#9829;</span> : <span>&#9825;</span>}
              </button>
            </div>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
            <p> {note.label} </p>
          </div>
        ))}
      </div>
      <div className="favorites">
        <h2>List of favorites:</h2>
        <ul>
          {favorites.map((noteId) => (
            <li key={noteId}>{notes.find((note) => note.id === +noteId)?.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

