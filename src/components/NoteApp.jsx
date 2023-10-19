import React, { useState } from "react";
import NoteActive from "./NoteActive";
import { getInitialData } from "../utils/index";

const NoteApp = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");

  const addNote = () => {
    const newNote = {
      id: +new Date(), // Unique timestamp-based identifier
      title: newNoteTitle,
      body: newNoteBody,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    setNewNoteTitle("");
    setNewNoteBody("");
  };

  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <div className="note-input__title">
          <p className="note-input__title__char-limit">Sisa Karakter</p>
        </div>
        <input
          placeholder="Masukkan judul disini ..."
          type="text"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Masukkan catatan disini ..."
          value={newNoteBody}
          onChange={(e) => setNewNoteBody(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={addNote}>Buat</button>
      </div>
      <NoteActive notes={notes} />
    </div>
  );
};

export default NoteApp;
