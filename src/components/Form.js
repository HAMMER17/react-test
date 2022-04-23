import React from "react";

export const Form = ({ notes, removeNote }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => {
        return <li className="list-group-item" id="note" key={note.id}>{note.title}
          <strong>{note.data}</strong>
          <button type="button" onClick={() => removeNote(note.id)} className="btn btn-outline-danger">&times;</button>
        </li>
      })}

    </ul>
  )
}