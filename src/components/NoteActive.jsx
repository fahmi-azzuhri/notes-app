import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteCard from "./NoteCard";
const NoteActive = () => {
  const data = getInitialData();
  const date = showFormattedDate();
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      <NoteCard data={data} date={date} />
    </div>
  );
};

export default NoteActive;
