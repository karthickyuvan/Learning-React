import React, { useState } from "react";

function NoteItem({ note, notes, setNotes }) {
  const [edit, setEdit] = useState(false); // Edit mode toggle
  const [title, setTitle] = useState(note.title); // Edit title
  const [content, setContent] = useState(note.content); // Edit content

  // Toggle completed (for checking or unchecking a note)
  const handleToggle = () => {
    const updatedNotes = notes.map(n =>
      n.id === note.id ? { ...n, completed: !n.completed } : n
    );
    setNotes(updatedNotes);
  };

  // Delete note with confirmation
  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this note?");
    if (isConfirmed) {
      const updatedNotes = notes.filter(n => n.id !== note.id);
      setNotes(updatedNotes);
    }
  };

  // Open the modal for editing
  const openModal = () => {
    setEdit(true); // Activate edit mode (open modal)
  };

  // Save the changes when editing is done
  const handleSave = () => {
    const updatedNotes = notes.map(n =>
      n.id === note.id ? { ...n, title, content } : n
    );
    setNotes(updatedNotes);
    setEdit(false); // Close the modal
  };

  // Cancel editing and close the modal
  const handleCancel = () => {
    setTitle(note.title); // Reset title
    setContent(note.content); // Reset content
    setEdit(false); // Close the modal
  };

  return (
    <div className={`note-item ${note.completed ? "done" : ""}`}>
 

      {/* Display note title and content */}
      <h3>{note.title.toUpperCase()}</h3>
      <div className="note-content">{note.content}</div>

      {/* Time and Date */}
      <small>{note.date} at {note.time}</small>

      {/* Action buttons */}
      <div className="note-actions">
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
        <button className="edit-btn" onClick={openModal}>Edit</button>
      </div>

      {/* Modal for editing */}
      {edit && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Note</h2>
            {/* Title input */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
            />
            {/* Content input */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="input-field"
            />
            {/* Modal action buttons */}
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
