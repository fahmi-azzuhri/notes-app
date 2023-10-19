import React from "react";

const NoteCard = ({ data, deleteNote }) => {
  return (
    <div className="notes-list">
      {data.map((note) => (
        <div className="note-item" key={note.id}>
          <div className="note-item__content">
            <h3 className="note-item__title">{note.title}</h3>
            <p className="note-item__date">
              {new Date(note.createdAt).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="note-item__body">{note.body}</p>
          </div>
          <div className="note-item__action">
            <button
              className="note-item__delete-button"
              onClick={() => deleteNote(note.id)}
            >
              Hapus
            </button>
            <button className="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
