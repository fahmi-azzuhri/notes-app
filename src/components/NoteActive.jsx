import React from "react";
import { getInitialData } from "../utils/index";
import NoteCard from "./NoteCard";
const NoteActive = ({ notes }) => {
  const data = getInitialData();
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      <NoteCard data={notes} />
    </div>
  );
};

export default NoteActive;
