import React, { useState } from "react";
import NoteActive from "./NoteActive";
import { getInitialData } from "../utils/index";
import Header from "./Header";

const NoteApp = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = () => {
    const newNote = {
      id: +new Date(),
      title: newNoteTitle,
      body: newNoteBody,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    setNewNoteTitle("");
    setNewNoteBody("");
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const filteredNotes = searchKeyword
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : notes;

  return (
    <>
      <Header setSearchKeyword={setSearchKeyword} />
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat Catatan</h2>
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
        <NoteActive notes={filteredNotes} deleteNote={deleteNote} />
      </div>
    </>
  );
};

export default NoteApp;
