import React from 'react';
import { useSelector } from 'react-redux';

function NoteList() {
  const notes = useSelector((state) => state.notes.notes);
  const search = useSelector((state) => state.notes.search);

  return (
    <div>
      <ul className='list-items'>
        {notes
          .filter((note) => {
            if (note.note.toLowerCase().includes(search.toLowerCase())) {
              return note;
            }
            return false;
          })
          .map((note) => (
            <li key={note.id} className={`list-item-${note.filtered[0].color}`}>
              {note.note}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NoteList;
