import { createSlice, nanoid } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    colorBoxes: [
      {
        color: 'blue',
        checked: false,
      },
      {
        color: 'yellow',
        checked: false,
      },
      {
        color: 'green',
        checked: false,
      },
      {
        color: 'purple',
        checked: false,
      },
      {
        color: 'grey',
        checked: false,
      },
    ],
    search: '',
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
        state.colorBoxes.map((item) => (item.checked = false));
      },
      prepare: (note, filtered) => {
        return {
          payload: {
            id: nanoid(),
            note,
            filtered,
          },
        };
      },
    },
    selectColor: (state, action) => {
      state.colorBoxes.filter((item) => {
        if (item.color !== action.payload) {
          item.checked = false;
        } else {
          item.checked = true;
        }
        return false;
      });
    },
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addNote, selectColor, handleSearch } = noteSlice.actions;
export default noteSlice.reducer;
