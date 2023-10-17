import React from "react";

const Header = () => {
  return (
    <div className="note-app__header">
      <h1>Death Note App</h1>
      <div className="note-search">
        <input placeholder="Cari catatan..." type="text" />
      </div>
    </div>
  );
};

export default Header;
