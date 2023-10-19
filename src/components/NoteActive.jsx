import React from "react";
import NoteCard from "./NoteCard";

const NoteActive = ({ notes, deleteNote }) => {
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      {notes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        <NoteCard data={notes} deleteNote={deleteNote} />
      )}
    </div>
  );
};

export default NoteActive;
