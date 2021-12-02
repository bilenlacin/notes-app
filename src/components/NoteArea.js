import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, selectColor } from '../redux/features/noteSlice';

function NoteArea() {
  const [note, setNote] = useState('');

  const colorBox = useSelector((state) => state.notes.colorBoxes);
  const checked = colorBox.map((color) => color.checked);
  let filtered = colorBox.filter((colour) => colour.checked && colour);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note) {
      return;
    }
    if (filtered.length === 0) {
      return;
    }

    dispatch(addNote(note, filtered));
    setNote('');
  };

  return (
    <div className='noteArea'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className='noteInput'
          type='text'
          placeholder='Enter your note here...'
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
      </form>

      <div className='colorBox'>
        <label className='container'>
          <input
            type='checkbox'
            onClick={() => dispatch(selectColor('blue'))}
            checked={checked[0]}
          />
          <span className='checkmark-blue'></span>
        </label>
        <label className='container'>
          <input
            type='checkbox'
            onClick={() => dispatch(selectColor('yellow'))}
            checked={checked[1]}
          />
          <span className='checkmark-yellow'></span>
        </label>
        <label className='container'>
          <input
            type='checkbox'
            onClick={() => dispatch(selectColor('green'))}
            checked={checked[2]}
          />
          <span className='checkmark-green'></span>
        </label>
        <label className='container'>
          <input
            type='checkbox'
            onClick={() => dispatch(selectColor('purple'))}
            checked={checked[3]}
          />
          <span className='checkmark-purple'></span>
        </label>
        <label className='container'>
          <input
            type='checkbox'
            onClick={() => dispatch(selectColor('grey'))}
            checked={checked[4]}
          />
          <span className='checkmark-grey'></span>
        </label>

        <button className='addButton' onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default NoteArea;
/*
 checked={colorBox.map((color) => color === 'blue' && color.checked)}
checked={colorBox.map(
              (color) => color === 'yellow' && color.checked
            )}

 checked={colorBox.map(
              (color) => color === 'green' && color.checked
            )}
            checked={colorBox.map((color) => {
              return color === 'purple' && color.checked;
            })}
            checked={colorBox.map((color) => color === 'grey' && color.checked)}
*/
