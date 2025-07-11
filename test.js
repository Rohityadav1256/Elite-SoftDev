const NotesManager = require('./notes-refactored');
const notes = new NotesManager();

notes.create({ title: "Note 1", content: "Hello" });
notes.create({ title: "Note 2", content: "World" });

console.log("All Notes:", notes.getAll());
notes.delete(0);
console.log("After Delete:", notes.getAll());
console.log("Find:", notes.findByTitle("Note 2"));
