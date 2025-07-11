let notes = [];

function createNote(note) {
  notes.push(note);
}

function getAllNotes() {
  return notes;
}

function deleteNote(index) {
  for (let i = index; i < notes.length - 1; i++) {
    notes[i] = notes[i + 1];
  }
  notes.length = notes.length - 1;
}

function findNoteByTitle(title) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title == title) {
      return notes[i];
    }
  }
  return null;
}

module.exports = {
  createNote,
  getAllNotes,
  deleteNote,
  findNoteByTitle,
};
