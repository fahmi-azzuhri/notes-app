import React from "react";

const NoteApp = () => {
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <div className="note-input__title">
          <p className="note-input__title__char-limit">Sisa Karakter</p>
        </div>
        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Buat</button>
      </div>
    </div>
  );
};

export default NoteApp;
