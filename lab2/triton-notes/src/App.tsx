import "./App.css";
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { useContext, useState } from "react"; // Import the useState hook
// import ToggleTheme from "./hooksExercise";
import { ThemeContext, themes } from "./themeContext";

export function App() {
  const [notes, setNotes] = useState<Note[]>(dummyNotesList);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<Note>({
    id: -1,
    title: "",
    content: "",
    label: Label.other,
  });
  const [selectedLabel, setSelectedLabel] = useState<Label>(Label.other);

  const handleLike = (noteId: number) => {
    const newFavorites = favorites.includes(noteId.toString())
      ? favorites.filter((id) => id !== noteId.toString())
      : [...favorites, noteId.toString()];

    setFavorites(newFavorites);
  };

  const createNoteHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotes([...notes, { ...newNote, label: selectedLabel }]);
    setNewNote({
      id: -1,
      title: "",
      content: "",
      label: Label.other,
    });
    setSelectedLabel(Label.other);
  };

  const handleUpdate = (noteId: number, title: string, content: string, label: Label) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId
          ? { ...note, title, content, label }
          : note
      )
    );
  };

  const handleDelete = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  const theme = useContext(ThemeContext);

  return (
    <div className="app-container"
    style={{
      background: theme.background,
      color: theme.foreground,
      padding: "20px",
    }}>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input
            placeholder="Note Title"
            suppressContentEditableWarning
            onFocus={(event) => (event.target as HTMLElement).style.backgroundColor = "#e0f7fa"}
            onBlur={(event) => (event.target as HTMLElement).style.backgroundColor = ""}
            onChange={(event) =>
              setNewNote({ ...newNote, title: event.target.value })
            }
            required
          ></input>
        </div>

        <div>
          <textarea
            placeholder="Note Content"
            suppressContentEditableWarning
            onFocus={(event) => (event.target as HTMLElement).style.backgroundColor = "#e0f7fa"}
            onBlur={(event) => (event.target as HTMLElement).style.backgroundColor = ""}
            onChange={(event) =>
              setNewNote({ ...newNote, content: event.target.value })
            }
            required
          ></textarea>
        </div>

        <div>
          <select
            value={selectedLabel}
            onChange={(event) =>
              setSelectedLabel(
                Label[event.target.value as keyof typeof Label]
              )
            }
            required
          >
            <option value="personal">Personal</option>
            <option value="study">Study</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <button type="submit">Create Note</button>
        </div>
      </form>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item"
          style={{ background: theme.background, color: theme.foreground }}>
            <div className="notes-header">
              <button onClick={() => handleLike(note.id)}
                style={{ background: theme.background, color: theme.foreground }}>
                {favorites.includes(note.id.toString()) ? (
                  <span>&#9829;</span>
                ) : (
                  <span>&#9825;</span>
                )}
              </button>
              <button onClick={() => handleDelete(note.id)}
                style={{ background: theme.background, color: theme.foreground }}>
                X
              </button>
            </div>
            <div
              contentEditable="true"
              className="note-title"
              onInput={(event) =>
                handleUpdate(
                  note.id,
                  (event.target as HTMLElement).innerText,
                  note.content,
                  note.label
                )
              }
            >
              {note.title}
            </div>
            <div
              contentEditable="true"
              className="note-content"
              onInput={(event) =>
                handleUpdate(
                  note.id,
                  note.title,
                  (event.target as HTMLElement).innerText,
                  note.label
                )
              }
            >
              {note.content}
            </div>
            <div
              contentEditable="true"
              className="note-label"
              onInput={(event) =>
                handleUpdate(
                  note.id,
                  note.title,
                  note.content,
                  Label[(event.target as HTMLInputElement).value as keyof typeof Label]
                )
              }
            >
              {note.label}
            </div>
          </div>
        ))}
      </div>

      <div className="favorites">
        <h2>List of favorites:</h2>
        <ul>
          {favorites.map((noteId) => (
            <li key={noteId}>
              {notes.find((note) => note.id === +noteId)?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ToggleTheme() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
 
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };
 
  return (
    <ThemeContext.Provider value={currentTheme}>
      <App />
      <button onClick={toggleTheme}> Toggle Theme </button>
    </ThemeContext.Provider>
  );
 }
 
 export default ToggleTheme;

