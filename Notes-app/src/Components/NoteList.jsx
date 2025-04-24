import React, { useState } from "react";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";

function NoteList({ notes, handleClick, setNotes }) {
  const [searchTerm, setSearchTerm] = useState(""); // To store the search query

  // Filter notes based on the search term
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-container">
      <div className="top-bar">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button className="add-btn" onClick={handleClick}>+</button>
      </div>
      <div className="note-list">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id} // Use the note's unique id as key
            note={note}    // Pass the whole note object to NoteItem
            notes={notes}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
