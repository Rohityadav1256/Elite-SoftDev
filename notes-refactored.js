class NotesManager {
  constructor() {
    this.notes = [];
  }

  create(note) {
    if (note && note.title && note.content) {
      this.notes.push(note);
    } else {
      console.error('Invalid note format');
    }
  }

  getAll() {
    return [...this.notes]; // returns a copy
  }

  delete(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    } else {
      console.error('Invalid index');
    }
  }

  findByTitle(title) {
    return this.notes.find(note => note.title === title) || null;
  }
}

module.exports = NotesManager;
