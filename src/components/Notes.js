import React from "react";

const Notes = ({notes, onRemove}) => {
  return (
    <div>
      <ul className="list-group">
          {notes.map(note => (
              <li key={note.id} className="list-group-item note">
                  <div>
                <strong>{note.title}</strong>
                <small>{new Date().toLocaleDateString()}</small>
                </div> 
               <button onClick={() => onRemove(note.id)} type="button" class="btn btn-danger">&times;</button>
              </li>
             
          ))}
      </ul>
    </div>
  );
};

export default Notes;
