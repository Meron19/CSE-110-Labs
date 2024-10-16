import { useContext, useState } from "react";
import { Label, Note } from "./types";
import { dummyNotesList } from "./constants";
import { ThemeContext } from "./themeContext";

export const StickyNotes = () => {
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
    setNewNote({ id: -1, title: "", content: "", label: Label.other });
    setSelectedLabel(Label.other);
  };

  const handleUpdate = (noteId: number, title: string, content: string, label: Label) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId ? { ...note, title, content, label } : note
      )
    );
  };

  const handleDelete = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const theme = useContext(ThemeContext);

  return (
    <div className="app-container" style={{ background: theme.background, color: theme.foreground, padding: "20px" }}>
      <form className="note-form" onSubmit={createNoteHandler}>
        <input
          placeholder="Note Title"
          onChange={(event) => setNewNote({ ...newNote, title: event.target.value })}
          required
        />
        <textarea
          placeholder="Note Content"
          onChange={(event) => setNewNote({ ...newNote, content: event.target.value })}
          required
        />
        <select
          value={selectedLabel}
          onChange={(event) => setSelectedLabel(Label[event.target.value as keyof typeof Label])}
        >
          <option value="personal">Personal</option>
          <option value="study">Study</option>
          <option value="work">Work</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Create Note</button>
      </form>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item" data-testid={`note-${note.id}`}>
            <div className="notes-header">
              <button onClick={() => handleLike(note.id)}>
                {favorites.includes(note.id.toString()) ? <span>&#9829;</span> : <span>&#9825;</span>}
              </button>
              <button onClick={() => handleDelete(note.id)}>X</button>
            </div>
            <div
              contentEditable="true"
              className="note-title"
              data-testid={`note-title-${note.id}`}
              onInput={(event) =>
                handleUpdate(
                  note.id,
                  (event.target as HTMLElement).innerHTML,
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
              data-testid={`note-content-${note.id}`}
              onInput={(event) =>
                handleUpdate(
                  note.id,
                  note.title,
                  (event.target as HTMLElement).innerHTML,
                  note.label
                )
              }
            >
              {note.content}
            </div>
            <div
              className="note-label"
              data-testid={`note-label-${note.id}`}
            >
              {note.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
