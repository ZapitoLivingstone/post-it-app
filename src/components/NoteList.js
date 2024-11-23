import React, { useState } from 'react';
import Note from './Note';

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      {notes.map(note => (
        <div className="col" key={note.id}>
          <Note 
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
