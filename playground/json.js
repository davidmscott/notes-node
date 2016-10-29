// var obj = {
// 	name: 'Dave'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Dave", "age": 35}';

// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var note = JSON.parse(fs.readFileSync('notes.json'));
console.log(typeof note,  note.title);