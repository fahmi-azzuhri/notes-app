import React from "react";

const Header = ({ setSearchKeyword }) => {
  return (
    <div className="note-app__header">
      <h1>Death Note App</h1>
      <div className="note-search">
        <input
          placeholder="Cari catatan..."
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
