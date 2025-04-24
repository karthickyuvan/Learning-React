function NoteForm({ notes, setNotes,isOpen, setIsOpen })
{
    if (!isOpen) return null;
    const handleAdd=(e)=> {
        e.preventDefault(); // stop form from refreshing the page
      
        // Basic input collection (assuming you're using refs or controlled components)
        const title = e.target.elements[0].value.trim();
        const content = e.target.elements[1].value.trim();
      
        if (!title || !content) {
          alert("Please fill in both title and note.");
          return;
        }
      
        const newNote = {
          id: Date.now(), // unique id
          title,
          content,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString()
        };
      
        setNotes([...notes, newNote]); // add to note list
        setIsOpen(false); // close the modal
      }
      
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                 <h3>Add a New Note</h3>
                 <form onSubmit={handleAdd}>
                     <input type="text" placeholder="Enter Title" className="input-field" />
                     <textarea placeholder="Enter Note" className="input-field"></textarea>
                        <div className="modal-buttons">
                            <button type="submit" className="save-btn " >Save</button>
                            <button type="button" className="cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                </form> 

            </div>
        </div>
    )
}
export default NoteForm;