import React from "react";

const NoteCard = ({ data }) => {
  return (
    <div className="notes-list">
      {data.map((notes) => (
        <div className="note-item" key={notes.id}>
          <div className="note-item__content">
            <h3 className="note-item__title">{notes.title}</h3>
            <p className="note-item__date">
              {new Date(notes.createdAt).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="note-item__body">{notes.body}</p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button">Hapus</button>
            <button className="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
